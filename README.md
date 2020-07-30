# SPOKE technical assessment
This has been a quick attempt at your assessment, and I've chosen to call time on it here as I've gone slightly over the allotted timeframe. This means that it's a fairly barebones implementation, but it's using GraphQL to talk to the shopifyAPI, Redux for state management, React for rendering and Parcel for bundling/running. And Jest with Enzyme for the tests. I hope you can see my thought process with this but I'd happily talk through any of it, or complete some more if you'd like.


### Quick Start
Install with `npm install` I was running `npm@6.13.6` and `node@10.17.0`
and the simply `npm start` to get it running on `http://localhost:1234`
or `npm test` to run the tests and check coverage.


### Future
* Implement your suggested views, this is just one page at the moment for speed and to avoid navigation/React router. This would come with proper navigation etc.
* I'd really like to have another play with Next.js as I started this test using it but couldn't get my head around the state management with redux serverside/clientside, more reading!
* The project could obviously use more styling and design! Including a lot more thought into a responsive design better suited for mobile-first.
* Futher basket implementation incudling removing and quantities on projects probably with a stepper or something similar.
* The testing is very light touch at the moment, relying heavily on snapshot testing, I'd like to get some more assertion around core functionality for peace of mind.
* Implement something around the tags, I think they could probably just be labels but it would be really nice to make certain ones like sale to really pop! 
* Persisting the redux store would be nice, probably through local storage.
