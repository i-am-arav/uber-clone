import React from 'react'
import tw from 'tailwind-styled-components';

export default function RideSelector() {
  return (
    <Wrapper>
        <InfoText>Choose a ride or swipe up for more</InfoText>
        <CarList>
            <CarContainer>
                <CarDetails>
                    <CarImage src="https://cdn-icons-png.flaticon.com/512/744/744465.png" />
                    <CarInfo> 
                        Uber X 
                        <Time> 5 mins away</Time>

                    </CarInfo>
                </CarDetails>
                <Price>$24.00</Price>
            </CarContainer>

            <CarContainer>
                <CarDetails>
                    <CarImage src="https://cdn-icons-png.flaticon.com/512/2089/2089883.png" />
                    <CarInfo> 
                        Uber XL
                        <Time> 8 mins away</Time>

                    </CarInfo>
                </CarDetails>
                <Price>$36.00</Price>
            </CarContainer>

            <CarContainer>
                <CarDetails>
                    <CarImage src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRehZQZcDv_zB4o2dqpQkG3LF9CKpG0IuNJo33j7cUnMxnHtR1Jlb3oYVERBXhYLEVPcaA&usqp=CAU" />
                    <CarInfo> 
                        Uber Sports
                        <Time> 16 mins away</Time>

                    </CarInfo>
                </CarDetails>
                <Price>$36.00</Price>
            </CarContainer>
           

             <CarContainer>
                <CarDetails>
                    <CarImage src=" https://cdn-icons-png.flaticon.com/512/6424/6424615.png" />
                    <CarInfo> 
                        Uber Airport
                        <Time> 7 mins away</Time>

                    </CarInfo>
                </CarDetails>
                <Price>$66.00</Price>
            </CarContainer>
            

            <CarContainer>
                <CarDetails>
                    <CarImage src="https://cdn-icons-png.flaticon.com/512/776/776558.png" />
                    <CarInfo> 
                        Uber Comfort
                        <Time> 22 mins away</Time>

                    </CarInfo>
                </CarDetails>
                <Price>$86.00</Price>
            </CarContainer>

            

            <CarContainer>
                <CarDetails>
                    <CarImage src="https://cdn-icons-png.flaticon.com/512/1986/1986937.png" />
                    <CarInfo> 
                        Uber Bike
                        <Time> 12 mins away</Time>

                    </CarInfo>
                </CarDetails>
                <Price>$28.00</Price>
            </CarContainer>

        </CarList>


    </Wrapper>
  )
}


const Wrapper = tw.div`text-black flex-1 overflow-y-scroll`
const InfoText = tw.div`text-sm text-center text-zinc-500 py-1 border border-b-1 border-gray-300`

const CarList = tw.div`overflow-y-scroll`
const CarDetails = tw.div`flex flex-start`
const CarContainer = tw.div`flex justify-between mt-2 px-2 items-center border-b-2 border-gray`
const CarImage = tw.img`h-14 w-16 mr-4`
const CarInfo = tw.div`font-medium  `
const Time = tw.div`text-blue-600 text-sm`

const Price = tw.div``
