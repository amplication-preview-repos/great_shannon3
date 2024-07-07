import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { SPORTS_TITLE_FIELD } from "../sports/SportsTitle";
import { CHANNELS_TITLE_FIELD } from "../channels/ChannelsTitle";

export const PostsList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"PostsItems"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="content" source="content" />
        <TextField label="uniqueHash" source="uniqueHash" />
        <TextField label="title" source="title" />
        <ReferenceField label="Sport" source="sports.id" reference="Sports">
          <TextField source={SPORTS_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField
          label="Channel"
          source="channels.id"
          reference="Channels"
        >
          <TextField source={CHANNELS_TITLE_FIELD} />
        </ReferenceField>
      </Datagrid>
    </List>
  );
};
