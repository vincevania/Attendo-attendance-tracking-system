	import { useState, useEffect, useRef } from 'react';
import Header from './Components/Header';
import './App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faXmark, faHashtag} from '@fortawesome/free-solid-svg-icons';
import allPresent from './assets/tada.mp3';
import allAbsent from './assets/failed.mp3';
import insta from './assets/instagram.png';
import linkedIn from './assets/linkedin.png';


function App() {

  const [classTime, setClassTime] = useState(0);
  const [data, setData] = useState([
    {Name: "Abhishek Rai",
    RegNo: 202222010,
    Picture: "https://randomuser.me/api/portraits/men/1.jpg",
    Attend: null
    },

    {Name: "Rishika Agarwal",
    RegNo: 202220189,
    Picture: "https://randomuser.me/api/portraits/women/8.jpg",
    Attend: null
    },

    {Name: "Sumiran Rai",
    RegNo: 202222009,
    Picture: "https://randomuser.me/api/portraits/men/86.jpg",
    Attend: null
    },

    {Name: "Bishal Sharma",
    RegNo: 202222008,
    Picture: "https://randomuser.me/api/portraits/men/44.jpg",
    Attend: null
    },

    {Name: "Olive Lepcha",
    RegNo: 2022220026,
    Picture: "https://randomuser.me/api/portraits/women/63.jpg",
    Attend: null
    },
    
  ]);
  const [present, setPresent] = useState(0);
  const [absent, setAbsent] = useState(0);
  const userRef = useRef();
  const regRef = useRef();
  const picRef = useRef();
  const updateRef = useRef();
  const updateName = useRef();
  const updateRegno = useRef();

  const existingDetailsRef = useRef();


  useEffect(() => {
    
    setTimeout(()=>{
      setClassTime(classTime + 1)
    }, 1000);
    //console.log(data);
  }, [classTime])

  const handleSubmit = ()=>{
    setData((student)=>[
      ...student, {
        Name: userRef.current.value,
        RegNo: regRef.current.value,
        Picture: picRef.current.value,
        Attend: null,
      }
    ])

    setTimeout(()=> {
      userRef.current.value = ""
      regRef.current.value = ""
      picRef.current.value = ""
    },300)
  }
  function count() {
    var pcount = 0, acount = 0;
    for(var i = 0; i < data.length; i++){
      if(data[i].Attend === "Present")pcount++;
      if(data[i].Attend === "Absent")acount++;
    }
    if(pcount !== present)setPresent(pcount);
    if(acount !== absent)setAbsent(acount);
    if(pcount === data.length){
      new Audio(allPresent).play();
    }
    else if(acount === data.length){
      new Audio(allAbsent).play();
    }
  }

  const formatTime = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;

    return `${hours > 0 ? `${hours}h ` : ""}${minutes > 0 ? `${minutes}m ` : ""}${remainingSeconds}s`;
  };

  // const handleEditSave = (index) => {
  //   setData((prevData) => {
  //     const newData = [...prevData];
  //     newData[index].Name = updateName.current.value;
  //     newData[index].RegNo = updateRegno.current.value;
  //     return newData;
  //   });

    //updateRef.current.style.display = 'none';
  // };

  return (
    <>
      <div className="flex bg-gray-100 ">
        <div className="flex-grow text-gray-800">
          <main className="p-6 sm:p-10 space-y-6  mb-12">
            <div className="flex flex-col space-y-6 md:space-y-0 md:flex-row justify-between">
              <Header/>
            </div>
            <section className="grid md:grid-cols-4 xl:grid-cols-4 gap-6">
              <div className="flex items-center p-8 bg-white shadow rounded-lg">
                <div className="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-purple-600 bg-purple-100 rounded-full mr-6">
                  <svg
                    aria-hidden="true"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="h-6 w-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <div>
                  <span className="block text-2xl font-bold">{data.length}</span>
                  <span className="block text-gray-500">Total Students</span>
                </div>
              </div>

              <div className="flex items-center p-8 bg-white shadow rounded-lg">
                <div className="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-purple-600 bg-purple-100 rounded-full mr-6">
                  <svg
                    aria-hidden="true"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="h-6 w-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <div>
                  <span className="block text-2xl font-bold">{present}</span>
                  <span className="block text-gray-500">Present Students</span>
                </div>
              </div>

              <div className="flex items-center p-8 bg-white shadow rounded-lg">
                <div className="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-blue-600 bg-blue-100 rounded-full mr-6">
                  <svg
                    aria-hidden="true"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="h-6 w-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                    />
                  </svg>
                </div>
                <div>
                  <span className="block text-2xl font-bold">{absent}</span>
                  <span className="block text-gray-500">Students Absent</span>
                </div>
              </div>

              <div className="flex items-center p-8 bg-white shadow rounded-lg">
              <div className="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-green-600 bg-green-100 rounded-full mr-6">
                <svg
                  aria-hidden="true"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                />
                </svg>
              </div>
          <div>
          <span className="block text-2xl font-bold">{formatTime(classTime)}</span>
          <span className="block text-gray-500">Time Spent in Class</span>
        </div>
      </div>
            </section>
            <section className="grid md:grid-cols-3 xl:grid-cols-3 xl:grid-rows-2 xl:grid-flow-col gap-6 h-200px">
              <div className="flex flex-col md:col-span-1 md:row-span-2 bg-white shadow rounded-lg">
                <div className="px-6 py-5 font-semibold border-b border-gray-100">
                  Add New Student
                </div>
                <div className="p-4 flex-grow">
                  <div className="flex flex-col gap-4 text-black h-full px-4 py-2 text-gray-400 font-semibold bg-gray-100 border-2 border-gray-200 border-dashed rounded-md">
                    <div className="relative h-10 w-full min-w-[200px]">
                      <input
                        ref = {userRef}
                        className="peer h-full w-full rounded-[7px] border border-blue-gray-200 bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-blue-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                        placeholder=""
                      />
                      <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-blue-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-blue-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-blue-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                        Student Name
                      </label>
                    </div>
                    <div className="relative h-10 w-full min-w-[200px]">
                      <input type='number'
                        ref = {regRef}
                        className="peer h-full w-full rounded-[7px] border border-blue-gray-200 bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-blue-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                        placeholder=""
                      />
                      <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-blue-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-blue-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-blue-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                        Registration No
                      </label>
                    </div>
                    <div className="relative h-10 w-full min-w-[200px]">
                      <input
                        ref = {picRef}
                        className="peer h-full w-full rounded-[7px] border border-blue-gray-200 bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-blue-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                        placeholder=""
                      />
                      <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-blue-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-blue-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-blue-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                        Picture URl
                      </label>
                    </div>
                    <button
                      className="middle none center rounded-lg bg-blue-500 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                      data-ripple-light="true" onClick={handleSubmit}
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </div>
              <div className="row-span-2 col-span-2 bg-white shadow rounded-lg">
                <div className="flex items-center justify-between px-6 py-5 font-semibold border-b border-gray-100">
                  <span>Name</span>
                  <span>Registration Number</span>
                </div>
                <div className="overflow-y-scroll " style={{ maxHeight: '200px' }}>
                  <ul className="p-6 space-y-6" >
                    {
                        (
                          data.map((item, index) => (
                            <>
                            <li key={index} className="flex items-center" ref={existingDetailsRef}>
                            <div className="h-10 w-10 mr-3 bg-gray-100 rounded-full overflow-hidden">
                              <img
                                src= {
                                  item.Picture
                                }
                                alt="Picture"
                              />
                            </div>
                            <span className="text-gray-600">
                              {
                                item.Name
                              }
                              &nbsp; <span style={{ color: 'grey'}}> 
                              {
                                item.Attend
                              }
                              </span>
                            </span>
        
                            <span className="ml-auto font-semibold">
                              {
                                item.RegNo
                              }
                            </span>
                            <span>
                              <button onClick={()=>{
                                  
                                  if(item.Attend === "Absent" || item.Attend === null)item.Attend = "Present";
                                  count();
                              }}><FontAwesomeIcon icon={faCheck} style={{color: "#00ff04", margin: "0 20px"}} /></button>
                              <button onClick={()=>{
                                  
                                  if(item.Attend === "Present" || item.Attend === null)item.Attend = "Absent";
                                  count();
                              }}><FontAwesomeIcon icon={faXmark} style={{color: "#ff0000",}} /></button>
                            </span>
                            <span>
                              {/* <button 
                                // onClick={()=>{
                                //updateRef.current.style.display = 'block';
                                // existingDetailsRef.current.style.display = 'none';
                              // }
                              // } 
                              style={{fontWeight: '', color: '#fff', backgroundColor: '#3b82f6', margin: '0 20px', borderRadius: '10px', padding: ' 0 20px'}}>Edit</button> */}
                            </span>
                            <form ref={updateRef} style={{display: 'none'}}>
                              <input type="text" id="StudentName" placeholder = "Student Name" ref={updateName}></input>
                              <input type="text" id="RegistrationNo" placeholder= "Registration No" ref={updateRegno}></input>
                                <button style={{backgroundColor: '#039e00', borderRadius: '5px', margin: '0 5px'}}>Save</button>
                                <button style={{backgroundColor: 'grey', borderRadius: '5px', margin: '0 5px'}}>Cancel</button>
                            </form>
                            </li>
                          </>
                          ))
                        )
                    }

                  </ul>
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>
      <footer className="text-center bg-gray-200 p-4 sm:p-6 lg:p-8">
          <span className="text-black">Updated by Abhishek Rai</span> <br/>
          <div className="flex justify-center mt-2">
            <a href="https://www.instagram.com/vincevania_" target='_blank' className="mx-2"><img src={insta} alt="Instagram"/></a>
            <a href="https://www.linkedin.com/in/abhishek-rai-4a8932257/" target='_blank' className="mx-2"><img src={linkedIn} alt="LinkedIn"/></a>
          </div>
          <a href="https://www.flaticon.com/free-icons/attend" title="attend icons" className="block mt-2">The Favicon is provided by Freepik - Flaticon</a>
        </footer>
    </>
  );
}

export default App
