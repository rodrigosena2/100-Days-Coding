import useAppContext from "../hook/useAppContext"

export default function ChildrenTwo({changeName}) {
  const {setName} = useAppContext()
  return (
    <button onClick={() => setName('Carlinhos da Massa')}> Mude o nome </button>
  )
}