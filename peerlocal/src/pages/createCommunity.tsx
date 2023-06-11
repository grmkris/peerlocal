import { NextPage } from "next";
import { useImmer } from "use-immer";
import { useMutation } from "@tanstack/react-query";
import { ConnectWallet } from "../features/ConnectWallet";
import { useSigner } from "wagmi";
import { usePeerLocalContract } from "../features/peerlocal/hooks/usePeerLocalContract";

export const CreateCommunity: NextPage = () => {
  const { createCommunity, joinCommunity } = usePeerLocalContract();
  const signer = useSigner();
  const [communityData, updateCommunityData] = useImmer({
    Name: "",
    Description: "",
    Image: "",
  });

  const uploadImage = useMutation(async (variables: { file: File }) => {
    const data = new FormData();
    console.log("uploadImage", variables.file);
    const result = await uploadFile(variables.file);
    console.log("result", result);
    if (!result) throw new Error("Error uploading image");
    updateCommunityData((draft) => {
      draft.Image = "https://bear.mypinata.cloud/ipfs/" + result;
    });
  });

  const createCommunityHandler = useMutation({
    mutationFn: async (variables: {}) => {
      const result = await pinJSONtoPinata(communityData);
      console.log(result);
      const tx = await createCommunity.mutateAsync({
        ipfs: result,
        stakingReq: 1,
        stakingToken: "0xD9662ae38fB577a3F6843b6b8EB5af3410889f3A", //DAI contract address
      });
      // @ts-ignore
      const event = await tx.wait();
      console.log("event", event);
      // @ts-ignore
      console.log("event.events[0]?.args", event.events[0]?.args[0]);
      // @ts-ignore
      return event.events[0]?.args[0];
    },
  });

  const handleFileChange = async (e: any) => {
    console.log(e.target.files);
    const file = e.target.files[0];
    console.log(file);
    await uploadImage.mutateAsync({ file });
  };

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    updateCommunityData((draft) => {
      // @ts-ignore
      draft[name] = value;
    });
  };

  // @ts-ignore
  const handleSubmit = async (e) => {
    e.preventDefault();
    await createCommunityHandler.mutateAsync(communityData);
  };

  const createInviteHandler = useMutation({
    mutationFn: async () => {
      if (!signer.data) return;
      const signature = await signer.data.signMessage(
        "I am the owner of this community"
      );
      console.log(signature);
      const fullstring =
        `http://localhost:3000/welcome/${createCommunityHandler.data}?signature=` +
        signature;
      console.log(fullstring);
      return fullstring;
    },
  });
  return (
    <div>
      <ConnectWallet />
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col">
          <h1>Create Community</h1>
          <label>Name</label>
          <input
            type="text"
            name="Name"
            onChange={handleInputChange}
            required
          />
          <label>Description</label>
          <input
            type="text"
            name="Description"
            onChange={handleInputChange}
            required
          />
          <label>Image</label>
          <input
            type="file"
            name="Image"
            onChange={handleFileChange}
            required
          />
          <input className={"btn"} type="submit" value="Create Community" />
        </div>
      </form>

      <div>
        <h2>Community Data</h2>
        Invite url:
        <br />
        <button
          className={"btn"}
          disabled={!createCommunityHandler.data}
          onClick={() => createInviteHandler.mutate()}
        >
          Invite
        </button>
        <button
          className={"btn"}
          disabled={!createInviteHandler.data}
          onClick={() =>
            navigator.clipboard.writeText(createInviteHandler.data ?? "")
          }
        >
          Copy
        </button>
      </div>
    </div>
  );
};

export default CreateCommunity;

export const uploadFile = async (file: any) => {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("pinataOptions", JSON.stringify({ cidVersion: 1 }));
  formData.append(
    "pinataMetadata",
    JSON.stringify({
      name: "Project",
      keyvalues: { company: "Pinata" },
    })
  );

  const url = `https://api.pinata.cloud/pinning/pinFileToIPFS`;
  const response = await fetch(url, {
    method: "POST",
    body: formData,
    headers: {
      Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mb3JtYXRpb24iOnsiaWQiOiJmZWI0MDgwNy1kZjI3LTRlZWQtOGE2NS1mNWExYjZmZjQzMzYiLCJlbWFpbCI6ImtyaXN0amFuLmdybTFAZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsInBpbl9wb2xpY3kiOnsicmVnaW9ucyI6W3siaWQiOiJGUkExIiwiZGVzaXJlZFJlcGxpY2F0aW9uQ291bnQiOjF9XSwidmVyc2lvbiI6MX0sIm1mYV9lbmFibGVkIjpmYWxzZSwic3RhdHVzIjoiQUNUSVZFIn0sImF1dGhlbnRpY2F0aW9uVHlwZSI6InNjb3BlZEtleSIsInNjb3BlZEtleUtleSI6ImZlMjYyZTExZGVlYzBkZjk2YmFkIiwic2NvcGVkS2V5U2VjcmV0IjoiOTdhOThlOGQ3YjdmNTFiNjg0NzEzMGUzODM0ZTYzZWQyNTYyZjQyNmZkNGY3YmI5MmIxYTA5M2U0OTA4OGU5NCIsImlhdCI6MTY4NjQyMjk2M30.TUvGZ4SEdIPW7-8W6zsJPGDUp2l_gJ5Nr6gppSZu2lI`,
    },
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const data = await response.json();
  return data.IpfsHash;
};

export async function pinJSONtoPinata(json: any) {
  const url = `https://api.pinata.cloud/pinning/pinJSONToIPFS`;
  const body = JSON.stringify(json);
  const options = {
    method: "POST",
    headers: {
      Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mb3JtYXRpb24iOnsiaWQiOiJmZWI0MDgwNy1kZjI3LTRlZWQtOGE2NS1mNWExYjZmZjQzMzYiLCJlbWFpbCI6ImtyaXN0amFuLmdybTFAZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsInBpbl9wb2xpY3kiOnsicmVnaW9ucyI6W3siaWQiOiJGUkExIiwiZGVzaXJlZFJlcGxpY2F0aW9uQ291bnQiOjF9XSwidmVyc2lvbiI6MX0sIm1mYV9lbmFibGVkIjpmYWxzZSwic3RhdHVzIjoiQUNUSVZFIn0sImF1dGhlbnRpY2F0aW9uVHlwZSI6InNjb3BlZEtleSIsInNjb3BlZEtleUtleSI6ImZlMjYyZTExZGVlYzBkZjk2YmFkIiwic2NvcGVkS2V5U2VjcmV0IjoiOTdhOThlOGQ3YjdmNTFiNjg0NzEzMGUzODM0ZTYzZWQyNTYyZjQyNmZkNGY3YmI5MmIxYTA5M2U0OTA4OGU5NCIsImlhdCI6MTY4NjQyMjk2M30.TUvGZ4SEdIPW7-8W6zsJPGDUp2l_gJ5Nr6gppSZu2lI`,
      "Content-Type": "application/json",
    },
    body,
  };
  const response = await fetch(url, options);
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const data = await response.json();
  return data.IpfsHash as string;
}
