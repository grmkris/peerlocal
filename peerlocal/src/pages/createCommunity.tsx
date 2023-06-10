import { NextPage } from "next";
import { useImmer } from "use-immer";
import { useMutation } from "@tanstack/react-query";
import { ConnectWallet } from "../features/ConnectWallet";

export const CreateCommunity: NextPage = () => {
  const [communityData, updateCommunityData] = useImmer({
    Name: "",
    Description: "",
    Image: "",
  });

  const uploadImage = useMutation(async (variables: { file: File }) => {
    const data = new FormData();
    data.append("file", variables.file);

    const result = await uploadFile(variables.file);
    if (!result) throw new Error("Error uploading image");
    updateCommunityData((draft) => {
      draft.Image = result;
    });
  });

  const createCommunity = useMutation({
    mutationFn: async (variables: {}) => {
      const result = uploadFile(JSON.stringify(communityData));
      console.log(result);
    },
  });

  const handleFileChange = async (e: any) => {
    await uploadImage.mutateAsync(e.target.files[0]);
  };

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    updateCommunityData((draft) => {
      draft[name] = value;
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createCommunity.mutateAsync(communityData);
  };

  return (
    <div>
      <ConnectWallet />
      <form onSubmit={handleSubmit}>
        <input type="text" name="Name" onChange={handleInputChange} required />
        <input
          type="text"
          name="Description"
          onChange={handleInputChange}
          required
        />
        <input type="file" name="Image" onChange={handleFileChange} required />
        <input type="submit" value="Create Community" />
      </form>
    </div>
  );
};

export default CreateCommunity;

export const uploadFile = async (file: any) => {
  const formData = new FormData();
  formData.append("file", file);
  const url = `https://api.pinata.cloud/pinning/pinJSONToIPFS`;

  const config = {
    method: "POST",
    maxContentLength: Infinity,
    headers: {
      pinata_api_key: "ç",
      pinata_secret_api_key:
        "fcc42dccdf872e2cad73c610fd456fcba50069ef682877fb6c9d383d927e11ff",
    },
    body: formData,
  };
  const response = await fetch(url, {
    method: "POST",
    body: formData,
    headers: {
      "Content-Type": `multipart/form-data; boundary=${formData._boundary}
      pinata_api_key: "9807e4444c8b18fac587",
      pinata_secret_api_key:
        "fcc42dccdf872e2cad73c610fd456fcba50069ef682877fb6c9d383d927e11ff",
    },
  });
};
