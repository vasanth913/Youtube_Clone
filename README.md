# Requirement Clarification

# High Level Design

    --> Features to be developed in Youtube
    --> Tech Stack (React(UI Layer), Redux(Data Layer), Tailwind(CSS Framework), Formik with yup(Forms and validation), Routing(React router dom), Bundler(Parcel/Webpack), Testing Framework(React Testing Library))
    * Total we must spend only 5 mins on this for discussion

# Low Level Design
   --> Header 
         --> Hamburger Icon (collapses and comes out) --> to open the side panel(Home, shorts, subscriptions, library)
         --> Search Bar
         --> User Icon
   --> Main Body
        --> Button List (Filters)
        --> Main Videos list
        --> On Click on particular video (it will go to a new page /watch (video, suggestions and comment section, like, share buttons))

# Component (* Total we can spend 7 minutes on this)
   --> Header Component
   --> SideBar Component
   --> Body Component
   --> ButtonList Component
   --> Container Component (Video Component, Watch Component)
   
# Executing npx create-react-app, it is a javascript package/library

# Tailwind css 
   --> npm i -D tailwindcss
   --> npx tailwindcss init
   --> copy contents in tailwind.config.js
   --> copy @tailwind.. in index.css

# Redux Toolkit
  --> npm i @reduxjs/toolkit
  --> npm i react-redux
      --- Step 1: Configure Store
      --- Step 2: Create Slice (name, initial State, reducers, action)
      --- Step 3: Provide my app to the store

# Youtube Data API 
  --> https://developers.google.com/youtube/v3/docs
  --> Youtube videos API link --> https://developers.google.com/youtube/v3/docs/videos/list?apix=true
  --> Youtube API Key link --> https://developers.google.com/youtube/registering_an_application
  --> https://console.cloud.google.com/apis/credentials?pli=1&project=youtubeclone-413002&supportedpurview=project
  --> API Key: AIzaSyCNegpBAQL5MSSUYIFmzn4IpfFbSwJZ5OQ

# Higher Order Component
  --> It's a function that takes in a component and modifies the component and returns the component

# Debouncing
  --> It limits the rate at which the function gets invoked
  # Debouncing with 200 ms
   --> Difference b/w two key stroke is 
          <200ms - Decline API call
          >200ms - Make an API call

# Youtube search Suggestions API
  --> Link: http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=iPhone

# Cache
  --> (Third Method)--> Time Complexity to search in array  = o(n)
  --> (Second Method)--> Time Complexity to search in object = o(1)
  --> (Preferrable Method)--> Searching inside map is even more optimized 
  --> LRU Cache - Least Recently used
  
# Major challenges of Live Chat
  --> Get Data Live
  --> Update UI

# Data (Live)
  --> Web Sockets(Initial connection takes time, once the connection is established it is easy
      --> Eg: CrytoCurrency, Trading Apps (Zerodha), Whatsapp Messages
  Two Way Communication/Handshake UI to Server, bidirectional)
  --> API Polling (It is unidirectional, after some intervals it will update)
      --> Eg: Gmail (After every 10 sec we can check whether new email has came or not), Cricbuzz, Youtube
  --> Youtube uses API Polling, it will delete the message in the chat (after 200 or 300 messages) to make the UI optimized and make sure UI is not get freezed
  --> If it's tablet or mobile, it will keep less messages and also delete old messages so that UI won't get freezed when it is flodded with messages