import React, { Component } from 'react';
import EventListItem from '../eventList/EventListItem';

class EventList extends Component {

    render() {
        return (
            <div>
            <EventListItem />
            <EventListItem />
            <EventListItem />
            <EventListItem />
            </div>
        );
    }
}

export default EventList;
