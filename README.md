# Getting Started

With latest Node LTS installed, run the following commands:

```sh
yarn install && yarn start 
```

Navigate to `http://localhost:3000/`.

## SimplyRETS API

SimplyRETS is a platform for developers and agents to build real estate
applications and websites.

Their API uses Basic Authentication, which most HTTP libraries will handle for
you. To use the test data, you can use the api key `simplyrets` and secret
`simplyrets`. Note that these test listings are not live RETS listings but the
data, query parameters, and response bodies will all work the same.

Please use the following endpoint: https://api.simplyrets.com/properties. More
information can found in the [SimplyRETS
documentation](https://docs.simplyrets.com/api/index.html#/Listings/get_properties).

# Code and Design Decisions

I have completed the exercise with the assumption that none of the property values will be null.

I chose to test the application with unit tests because it's the best strategy for isolating elements to make sure each one renders properly.

2/2 Updates:
TODO:
1. Update tests for the components
2. Perhaps condense FavoritesPage and PropertyListingPage into one component since they're very similar
