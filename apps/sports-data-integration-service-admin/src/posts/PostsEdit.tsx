import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { SportsTitle } from "../sports/SportsTitle";
import { ChannelsTitle } from "../channels/ChannelsTitle";

export const PostsEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="content" multiline source="content" />
        <TextInput label="uniqueHash" source="uniqueHash" />
        <TextInput label="title" source="title" />
        <ReferenceInput source="sport.id" reference="Sports" label="Sport">
          <SelectInput optionText={SportsTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="channel.id"
          reference="Channels"
          label="Channel"
        >
          <SelectInput optionText={ChannelsTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
