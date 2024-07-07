import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { SPORTS_TITLE_FIELD } from "../sports/SportsTitle";
import { CHANNELS_TITLE_FIELD } from "./ChannelsTitle";

export const ChannelsShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="telegramChatId" source="telegramChatId" />
        <TextField label="name" source="name" />
        <ReferenceManyField
          reference="Posts"
          target="channelId"
          label="PostsItems"
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
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
