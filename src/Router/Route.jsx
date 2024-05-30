import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Donation from "../Pages/Donation/Donation";
import Statistics from "../Pages/Statistics/Statistics";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Card from "../Components/Card/Card";
import DonationDetails from "../Components/DonationDetails/DonationDetails";



const myCreatedRoute = createBrowserRouter([
    {
        path : "/",
        element : <MainLayout></MainLayout>,
        errorElement : <ErrorPage></ErrorPage>,  
        children : [
            {
                path : "/",
                element : <Home></Home>,
                loader : () => fetch('/cards.json')
            },
            {
                path: "/donation",
                element : <Donation></Donation>
            },
            {
                path: "/donation/:id",
                element : <DonationDetails></DonationDetails>
            },
            {
                path: "/statistics",
                element : <Statistics></Statistics>
            },
            {
                path: "/cards/:id",
                element: <Card></Card>,
                loader: () => fetch('/cards.json')

            }
        ]
    }
])


export default myCreatedRoute;