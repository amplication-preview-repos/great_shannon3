import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { PostsTitle } from "../posts/PostsTitle";

export const ChannelsCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
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
    </Create>
  );
};