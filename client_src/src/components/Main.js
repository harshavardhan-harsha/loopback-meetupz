import React from "react";
import { Switch, Route } from "react-router-dom";
import Meetups from "./Meetups";
import About from "./About";
import MeetupDetails from "./MeetupDetails";
import AddMeetup from "./AddMeetup";
import EditMeetup from "./EditMeetup";

const Main = () => {
  return (
    <main>
      <Switch>
        <Route path="/" exact component={Meetups} />
        <Route path="/about" exact component={About} />
        <Route path="/meetups/add" exact component={AddMeetup} />
        <Route path="/meetups/edit/:id" exact component={EditMeetup} />
        <Route path="/meetups/:id" exact component={MeetupDetails} />
      </Switch>
    </main>
  );
};

export default Main;
