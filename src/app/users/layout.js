import Link from "next/link";
import MyBreadCrumb from "../MyComponents/MyBreadCrumb";

export default function UsersLayout({ children }) {
    return (
        <div>
            <MyBreadCrumb/>
            {children}
        </div>
    );
}