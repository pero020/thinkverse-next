import { getSession } from "next-auth/react";
import clientPromise from "/lib/mongodb"

export default async function handler (req, res) {
  const session = await getSession({req})

  const client = await clientPromise;
  const db = client.db(process.env.MONGODB_DB);

  const title = req.query.title;

  try {
    if (!session) {
      res.status(403).send()
      return 1
    }
  
    let titleChanged = await db.collection("users").updateOne(
    {email: session.user.email},
    {
      $set: {
        "title": title
      }
    }
    );
  
    res.status(200).send()
  } catch (e) {
    console.log(e)
    res.status(500).send(e)
  }
  

  
}