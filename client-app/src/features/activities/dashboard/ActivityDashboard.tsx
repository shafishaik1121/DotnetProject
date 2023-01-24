import { Grid, List } from "semantic-ui-react";
import React from "react";

import ActivityList from "./ActivityList";
import ActivityDetails from "../Details/ActivityDetails";
import ActivityForm from "../form/ActivityForm";
import { useStore } from "../../../app/stores/stores";
import { observer } from "mobx-react-lite";

export default observer (function ActivityDashboard(){

         const {activityStore} = useStore(); 
         const {selectedActivity, editMode} = activityStore;     
         return (
        <Grid>

            <Grid.Column width='10'>
                <ActivityList />
            </Grid.Column>

            <Grid.Column width='5'>
                {selectedActivity && !editMode && <ActivityDetails />}
                {editMode &&
            <ActivityForm  /> }
            </Grid.Column>

        </Grid>
    )
})