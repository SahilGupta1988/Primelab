import Head from "next/head";
import { HomeLayout } from "components";
import { useSelector } from "react-redux";
import { Grid } from "@mui/material";

const Contacts = () => {
  const st = useSelector((state) => state);
  console.log(st);
  return (
    <div>
      <Head>
        <title>Contacts Page</title>
        <meta name="description" content="Contacts Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Grid container spacing={2} sx={{ marginTop: "10px" }}>
          <Grid item xs={12}></Grid>
        </Grid>
      </main>
    </div>
  );
};

Contacts.getLayout = HomeLayout;
export default Contacts;
