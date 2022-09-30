import tw from "tailwind-styled-components"
import Map from './components/map'
import Link from 'next/link'

export default function Home() {


  return (
    <Wrapper>
    <Map />
    <ActionItems>

      {/* Header */}
      <Header>
        <UberIcon src={'https://download.logo.wine/logo/Uber/Uber-Logo.wine.png'} />
        <Profile>
          <UserName>Tom Cruise</UserName>
          <UserImage src="https://www.etonline.com/sites/default/files/styles/max_640x640/public/images/2022-08/Tom-Cruise-Getty-1241413356.jpg?h=613cc934&itok=-pmLDsdC" />
        </Profile>
      </Header>

      {/* Action Buttons */}
      <ActionButtonContainer>
        <Link href='/search'>
        <ActionButton>
          <ActionButtonImage src='https://cdn-icons-png.flaticon.com/512/3089/3089627.png'/>
          Ride
        </ActionButton>
        </Link>
        <ActionButton>
          <ActionButtonImage src="https://iconarchive.com/download/i95550/iconsmind/outline/Bicycle-2-2.ico" />
          Wheels
        </ActionButton>
        <ActionButton>
          <ActionButtonImage src="https://cdn-icons-png.flaticon.com/512/3515/3515402.png" />
          Reserve
        </ActionButton>
      </ActionButtonContainer>

      <InputButton>
        Where to ?
      </InputButton>

    </ActionItems>
    </Wrapper>
  )
}


const Wrapper = tw.div`
flex flex-col bg-red-300 h-screen text-black
`

const ActionItems = tw.div`
flex flex-col flex-1 bg-white p-2
`
const Header = tw.div` flex justify-between items-center px-2`

const UberIcon = tw.img`h-32 `
const Profile =tw.div`flex items-center`

const UserName = tw.div`mr-4 w-20 text-sm`
const UserImage = tw.img`h-12 w-12 rounded-full border border-gray-200`

const ActionButtonContainer = tw.div`flex`

const ActionButton = tw.button`h-32 bg-gray-200 flex-1 flex flex-col justify-center items-center m-1 rounded-lg transform hover:scale-110 transition text-xl`
const ActionButtonImage = tw.img`h-16 w-16`

const InputButton = tw.div`
h-20 bg-gray-200 text-2xl p-4 mt-8 flex items-center rounded-sm`

