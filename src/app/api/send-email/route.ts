
export async function GET(req : Request) {
  const data = req.json()
  console.log(data)
  return Response.json(data)
}
export async function POST(req : Request) {
  const data = req.json()
  console.log(data)
  return Response.json(data)
}
export async function PUT(req : Request) {
  const data = req.json()
  console.log(data)
  return Response.json(data)
}