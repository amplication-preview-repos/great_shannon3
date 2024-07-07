import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { PostsTitle } from "../posts/PostsTitle";

export const ChannelsEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="telegramChatId" source="telegramChatId" />
        <TextInput label="name" source="name" />
        <ReferenceArrayInput
          source="postsItems"
          reference="Posts"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={PostsTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Edit>
  );
};
