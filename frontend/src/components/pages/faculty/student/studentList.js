import React, {Component} from 'react'

export default class StudentList extends Component {


    render() {
        const {studentData: student, countData, page} = this.props;
        console.log(countData)
        const maxCount = Math.ceil(countData / 10);
        console.log('max count: ' + maxCount);
        return (
            <div className="relative h-full">
                <div>

                    <div className="flex justify-between p-3 w-full">
                        <input type="search" placeholder="search" onChange={this.props.searchStudent}
                               className="border-2 border-green-400 p-1 w-1/2 w-10/12"/>
                        <a href="/api/report/hours">

                            <button
                                className="bg-green-700 font-bold hover:bg-green-800 hover:shadow-lg inline-flex items-center px-4 py-3 right-0 rounded text-sm text-white text-center" title={'Download student hour report'}>
                                <svg className="fill-current w-4 h-4" xmlns="http://www.w3.org/2000/svg"
                                     viewBox="0 0 20 20">
                                    <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"></path>
                                </svg>
                            </button>
                        </a>
                    </div>
                    <div>
                        {
                            (student && student.length) ?
                                <ul>
                                    {
                                        student.map((data, index) => {
                                            return <li key={index}
                                                       className={`flex justify-between px-6 py-2 hover:bg-green-200 ${index === this.props.studentNo && 'bg-green-300 hover:bg-green-300'}`}
                                                       onClick={() => {
                                                           this.props.selectedStudent(index)
                                                       }}>
                                                <span>{data.user.first_name + " " + data.user.last_name}</span><span>{data.student_id}</span>
                                            </li>
                                        })
                                    }

                                </ul> : "Users not found"
                        }

                    </div>


                </div>
                <div
                    className="absolute w-full  border-gray-200 border-t bottom-0 flex justify-center justify-between px-4 py-3 sm:px-6">
                    <div className="flex-1 flex justify-center ">
                        <a href="#" onClick={() => {
                            this.props.pagination(parseInt(page > 1 ? page - 1 : 1))
                        }}
                           className="relative inline-flex items-center px-4 py-2  border border-green-400 text-sm leading-5 font-medium rounded-md text-gray-700 bg-white hover:text-gray-500 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 active:bg-gray-100 active:text-gray-700 transition ease-in-out duration-150">
                            Previous
                        </a>
                        <span className="h-10 leading-10 text-center w-10">{page}</span>
                        <a href="#" onClick={() => {
                            this.props.pagination(parseInt(page >= 1 && page < maxCount ? page + 1 : 1))
                        }}
                           className="ml-3 relative inline-flex items-center px-4 py-2 border border-green-400 text-sm leading-5 font-medium rounded-md text-gray-700 bg-white hover:text-gray-500 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 active:bg-gray-100 active:text-gray-700 transition ease-in-out duration-150">
                            Next
                        </a>
                    </div>

                </div>
            </div>
        )
    }
}
