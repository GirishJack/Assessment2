import React from "react";
import { createStackNavigator, createAppContainer} from "react-navigation";

import Products from "../pages/Products";
import Home from "../pages/Home";
import Cart from "../pages/Cart";
import Invoice from "../pages/Invoice";

const Route = createStackNavigator(
    {
        Products : Products, 
        Home : Home,
        Cart :Cart,
        Invoice :Invoice
        
    },
    {
        initialRouteName: "Home"
    },
    // {
    //     navigationOptions: {
    //       headerStyle: {
    //         backgroundColor: themes.BACKGROUND_COLOR,
    //         paddingHorizontal: 10
    //       },
    //       headerTintColor: "#fff"
    //     }
    //   },
);
const RouterConfig = createAppContainer(Route);
export default RouterConfig;
