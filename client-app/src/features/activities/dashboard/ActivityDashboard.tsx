import { Grid } from "semantic-ui-react";
import { useEffect } from "react";
import ActivityList from "./ActivityList";
import { useStore } from "../../../app/stores/stores";
import { observer } from "mobx-react-lite";
import LoadingComponent from "../../../app/layout/LoadingComponent";

export default observer (function ActivityDashboard(){
         const {activityStore} = useStore(); 
         const {loadActivities, activityRegistry} = activityStore;
        
         useEffect(() => {
            if (activityRegistry.size <= 1) loadActivities();
         }, [loadActivities])

         if (activityStore.loadingInitial) return <LoadingComponent content="Loading app..." />

         return (
        <Grid>

            <Grid.Column width='10'>
                <ActivityList />
            </Grid.Column>

            <Grid.Column width='5'>
              <h2>Activity filters</h2>
            </Grid.Column>
        </Grid>
    )
})