import {prismaClient} from "db/client"


export default async function Home() {
  const users = await prismaClient.user.findMany()
  return (
    <div>
      <p>Users:</p>
      {users.map(index=>{
        return <>
        <p>username:{index.username}</p>
        <p>value:{index.value}</p>
        <p>id:{index.id}</p>
        </>
      })}
    </div>
  )
}