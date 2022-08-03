import React, { Fragment, useState } from 'react'


import Vector from '../assets/sort.png';
import Vector1 from '../assets/Filter.png';
import arrow1 from '../assets/arrw1.png';
import arrow2 from '../assets/arrw2.png';

import UserDisplay from './User_Display';
import RecentUpload from './RecentUpload';



function Users
    () {


    const UsersInfo = [
        {
            id: 1,
            name: 'Jason Crejza',
            Last_Uploaded: 'Nature.png',
            username: 'Danny_123',
            Gender: 'Male',
            email: '123@gmail.com',
            img: '1',

        },
        {
            id: 2,
            name: 'Emily Watson',
            Last_Uploaded: 'Cats.png',
            username: 'Danny_123',
            Gender: 'Male',
            email: '123@gmail.com',
            img: '5',

        },
        {
            id: 3,
            name: 'Sarah Taylor',
            Last_Uploaded: 'Tree.png',
            username: 'Danny_123',
            Gender: 'Male',
            email: '123@gmail.com',
            img: '6',


        },
        {
            id: 4,
            name: 'Jeff Kim ',
            Last_Uploaded: 'Mountains.png',
            username: 'Danny_123',
            Gender: 'Male',
            email: '123@gmail.com',
            img: '2',


        },
    ]


    const [dis, setdis] = useState(true)
    const [Ids, setids] = useState()

    const handleclick = (Id) => {

        setdis(!dis)
        setids(Id)

    }

    return (
        <Fragment>

            <div className=' m-5 '>
                {!dis ?
                    <UserDisplay parent={Ids} /> :
                    <div className={!dis ? 'hidden' : '  bg-white rounded-[8px] border-[1px] mt-[10px]'}>
                        <div className='flex'>
                            <p className='w-[200px] font-Poppins m-10 text-2xl font-semibold  '>User's Info</p>
                            <div className='flex w-[100%] justify-end mt-10 mr-14 font-Poppins text-[#4B506D] font-medium space-x-5'>
                                <img src={Vector} alt='' className='  h-[14px] mt-[5px] ' />
                                <label>Sort</label>
                                <img src={Vector1} alt='' className=' h-[14px] mt-[5px] ' />
                                <label>Filter</label>
                            </div>



                        </div>
                        <div className='m-5'>
                            <div class="overflow-x-auto relative shadow-md sm:rounded-lg">
                                <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                                    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                        <tr>
                                            <th scope="col" class="py-3 px-6">

                                            </th>
                                            <th scope="col" class="py-3 px-6">
                                                Name
                                            </th>
                                            <th scope="col" class="py-3 px-6">
                                                Email
                                            </th>
                                            <th scope="col" class="py-3 px-6">
                                                Last Updated
                                            </th>
                                            <th scope="col" class="py-3 px-6">
                                                Username
                                            </th>
                                            <th scope="col" class="py-3 px-6">
                                                Actions
                                            </th>
                                        </tr>
                                    </thead>

                                    {/* T body  */}

                                    {
                                        UsersInfo.map((val, id) => {

                                            const b = val.img
                                            return <UserDisplay
                                                id={val.id}
                                                name={val.name}
                                                email={val.email}

                                                last={val.Last_Uploaded}
                                                username={val.username}
                                                img={require('./profile/img' + b + '.png')}
                                                click={handleclick}
                                            />
                                        })
                                    }

                                </table>
                                <hr></hr>

                                <div className='flex mb-7'>
                                    <div className='flex justify-end w-[90%] text-[#9FA2B4] space-x-40'>
                                        <label>Rows per page 8</label>
                                        <label >1-8 of 1240</label>

                                    </div>
                                    <img src={arrow1} alt='' className='  ' />
                                    <img src={arrow2} alt='' className='  ' />
                                </div>

                            </div>

                        </div>






                    </div>
                }
                <label className="my-10  font-Poppins  text-2xl font-semibold  "> Recent Uploads </label>
                <RecentUpload />





            </div>



        </Fragment>

    )
}

export default Users