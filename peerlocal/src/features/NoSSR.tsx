import type {ReactNode} from "react";
import {Fragment} from "react";
import dynamic from "next/dynamic";

const NoSSR = (props: { children: ReactNode }) => (
    <Fragment>{props.children}</Fragment>
);
export default dynamic(() => Promise.resolve(NoSSR), {
    ssr: false,
});
