import React, { useState } from 'react'
import tw from 'tailwind-styled-components';
import Link from 'next/link';

export default function Search() {

    const [pickup,setPickup] = useState("");
    const [drop,setDrop] = useState("");
  return (
    <Wrapper>
        <ButtonContainer>
            <Link href="/">
            <BackButton src="https://cdn-icons-png.flaticon.com/512/271/271218.png" />
            </Link>
        </ButtonContainer>
        <InputContainer>
            <FromToIcon>
                <Circle src="https://cdn-icons-png.flaticon.com/512/32/32341.png" />
                <Line src="https://static.thenounproject.com/png/2449181-200.png" />
                <Square src="https://cdn.iconscout.com/icon/free/png-256/rounded-square-459344.png" />
            </FromToIcon>

            <InputBoxes>
                <Input placeholder='Enter Pickup Location' value={pickup} onChange={(e) => setPickup(e.target.value)} />
                <Input placeholder='Enter Drop Location' value={drop} onChange={(e) => setDrop(e.target.value)} />
            </InputBoxes>

            <AddStopButton>
                <PlusIcon src="https://uxwing.com/wp-content/themes/uxwing/download/user-interface/plus-icon.png" />
            </AddStopButton>

        </InputContainer>
        <SavedPlaces>
            <StarIcon src="https://cdn3.iconfinder.com/data/icons/sympletts-free-sampler/128/star-512.png" />
            Saved Places
        </SavedPlaces>
        <Link href={{pathname : '/confirm', query: { pickup, drop }}}>
        <ConfirmContainer>
            <ConfirmButton disabled={!(pickup && drop)}>
           Confirm Location
           </ConfirmButton>
        </ConfirmContainer>
        </Link>

    </Wrapper>
  )
}


const Wrapper = tw.div`
bg-gray-200 text-black h-screen`

const ButtonContainer = tw.div` bg-white py-4 px-4`
const BackButton = tw.img`h-6 w-6 cursor-pointer`
const InputContainer = tw.div`bg-white py-4 flex`

const FromToIcon = tw.div` px-4`
const Circle = tw.img`h-4 w-4`
const Line = tw.img`h-16 w-4`
const Square = tw.img`h-4 w-4`

const InputBoxes = tw.div`flex flex-col justify-between flex-1`
const Input =tw.input`h-10 bg-gray-200 rounded px-2 outline-none border-none`

const AddStopButton = tw.button`
rounded-full bg-gray-200 ml-4 mr-2 mt-auto mb-1 h-8 w-8 flex justify-center items-center`
const PlusIcon = tw.img`w-4 h-4`

const SavedPlaces = tw.div`
bg-white h-16 mt-4 p-4 flex text-xl items-center`

const StarIcon = tw.img`bg-gray-400 h-6 w-6 rounded-full mr-4 outline-none border-none`

const ConfirmContainer = tw.div`mt-4 mx-2 bg-black text-white text-center py-3 rounded-lg cursor-pointer`
const ConfirmButton = tw.button`w-full`