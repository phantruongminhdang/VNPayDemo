import { useRoutes } from "react-router-dom";
import VnPayRequest from "../page/VnPayRequest";
import Layout from "./Layout";
import { AnimatePresence } from "framer-motion";
import VnPayCallBack from "../page/VnPayCallBack";

function Router() {

    const element = useRoutes([
        {
            element: <Layout />,
            children: [
                {
                    path: "/VnPayRequest",
                    element: <VnPayRequest />,
                },
                {
                    path: "/PaymentCallback",
                    element: <VnPayCallBack />,
                },
            ]
        },
    ]);
    console.log(element);
    if (!element) return null;
    return (
        <>
            <AnimatePresence mode="wait" initial={false}>
                {element}
            </AnimatePresence>
        </>
    );
}

export default Router;