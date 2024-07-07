import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { SportsList } from "./sports/SportsList";
import { SportsCreate } from "./sports/SportsCreate";
import { SportsEdit } from "./sports/SportsEdit";
import { SportsShow } from "./sports/SportsShow";
import { ChannelsList } from "./channels/ChannelsList";
import { ChannelsCreate } from "./channels/ChannelsCreate";
import { ChannelsEdit } from "./channels/ChannelsEdit";
import { ChannelsShow } from "./channels/ChannelsShow";
import { PostsList } from "./posts/PostsList";
import { PostsCreate } from "./posts/PostsCreate";
import { PostsEdit } from "./posts/PostsEdit";
import { PostsShow } from "./posts/PostsShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"SportsDataIntegrationService"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Sports"
          list={SportsList}
          edit={SportsEdit}
          create={SportsCreate}
          show={SportsShow}
        />
        <Resource
          name="Channels"
          list={ChannelsList}
          edit={ChannelsEdit}
          create={ChannelsCreate}
          show={ChannelsShow}
        />
        <Resource
          name="Posts"
          list={PostsList}
          edit={PostsEdit}
          create={PostsCreate}
          show={PostsShow}
        />
      </Admin>
    </div>
  );
};

export default App;
