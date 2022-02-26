import Head from "next/head";
import { HomeLayout } from "components";
import { useSelector } from "react-redux";
import { Card, CardContent, Grid } from "@mui/material";
import { ContactsCard } from "containers";

const Home = () => {
  const st = useSelector((state) => state);
  console.log(st);
  const handleCardClick = () => {};
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Grid container spacing={2} sx={{ marginTop: "10px" }}>
          <Grid item xs={6}>
            <ContactsCard />
          </Grid>
          <Grid item xs={6}>
            <Card sx={{ minHeight: "99px" }}>
              <CardContent></CardContent>
            </Card>
          </Grid>
          <Grid item xs={12}>
            <Card sx={{ minHeight: "168px" }}>
              <CardContent></CardContent>
            </Card>
          </Grid>
        </Grid>
      </main>
    </div>
  );
};

Home.getLayout = HomeLayout;
export default Home;
