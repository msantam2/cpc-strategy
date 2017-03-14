# CPC-Strategy: SEO Analysis

[Live Web App!](https://msantam2.github.io/cpc-strategy/)

## Technologies Used
| UI | Global App State | Routing | Auxiliary |
| --------------     | --------------   | -------------- | -------------- |
| React.js, CSS | Redux | React-Router | react-redux, fetch API, redux-thunk, material-ui, ant-design, react-search-input, Google Charts, lodash, create-react-app |

This application was crafted with total simplicity and a delightful UI in mind.
The general approach to architecting this application was allow the user to analyze collective information at each level and, if they so choose, explore even deeper in the app to analyze more granular information.
At the Client list level you see the overview for each client (counts of products, keywords, rank data points). 
If the user selects a client, they are presented with each product (with added Search functionality), displaying respective info on the number of keywords and the average rank position per keyword. This allows the user to see which keyword is performing best relative to its peers for a given product. 
Upon clicking "Ranking Analytics", the user is presented with a chart of the rank positions over time, with a trendline generated over this scatterplot to determine if the product is moving toward or away from position #1 in the search results. If they are improving, awesome! If they are moving away, it is OK - our team will work closely with the customer!

## Features & Implementation Details

- Implemented React state hoisting in this app: only make 1 AJAX fetch call at the highest level (```App.js```), store this data in the Redux state, and let the data trickle down the component hierarchy. This minimizes expensive API calls. 
- Search bar within client's product grid allows easy search across products by product name, ID, or ASIN. This would be very easy to augment in the future if necessary.
- Created a ```NotFound``` component, which will give a 404 error for an incorrect URL (go ahead, try it!). This component (along with ```TitleBar```) is entirely reusable for future projects - they rely on no concrete code. 
- The color scheme is inspired by the color scheme of the CAPx platform. 
- I choose all of the technologies very specifically to create a coherent and smooth UX
- Built the Trendline Chart component with the Google Charts API, called in ```componentDidMount``` of ```Chart.js```
- Harnessed Webpack: create 1:1 relationship between component and its stylesheet, simply importing the stylesheet in the component to include it in the webpack bundle
- Bootstrapped with create-react-app

## Screenshots

<img src="https://res.cloudinary.com/dc2o3efbz/image/upload/v1489523618/Screen_Shot_2017-03-14_at_1.29.41_PM_eb9g8r.png" width="800" height="450" 
/>

<img src="https://res.cloudinary.com/dc2o3efbz/image/upload/v1489523623/Screen_Shot_2017-03-14_at_1.30.07_PM_kkedwj.png" width="800" height="450" 
/>

<img src="https://res.cloudinary.com/dc2o3efbz/image/upload/v1489523626/Screen_Shot_2017-03-14_at_1.30.15_PM_sw3lwt.png" width="800" height="450" 
/>