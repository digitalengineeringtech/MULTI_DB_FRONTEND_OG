import React from 'react'
import { TbReload } from 'react-icons/tb';


function MacComponent({component,children}) {
    



  return (
     <div className='content w-[50%]  mt-[80px] rounded-lg bg-white h-[500px]  '>
                     <div className='bar bg-gray-800 drop-shadow-2xl flex h-[40px] px-3 justify-between rounded-t-lg items-center '>
                              <div className='nav  w-[37.33%] h-[20px] rounded-lg gap-2 flex'>
                              <div className='bg-[#FF605C] w-[15px] h-[15px] rounded-full'></div>
                              <div className='bg-[#FFBD44] w-[15px] h-[15px] rounded-full'></div> 
                              <div className='bg-[#00CA4E] w-[15px] h-[15px] rounded-full'></div> 
                              </div>   
                              <div className='bg-gray-400 w-[50.33%] h-[30px] px-4 flex justify-center items-center '><p className='text-xs'>https://detmm-fuelstations.com</p><TbReload className='scale-[0.8] font-extrabold'/></div>
                              <div className='w-[37.33%]'></div>
                          </div>
                      <div className='p-5 items-center mt-[30px] flex justify-start'>
                    <div className='scale-[0.9]'>
                  <h3 className='text-black mb-5'>{component}</h3>
                  {
                    children  
                     }        
                    </div>
                          </div>
                          <div className='px-5 pt-10'>
                              <table>
  <tbody>
    <tr>
      <td class="td-1"><span></span></td>
      <td class="td-2"><span></span></td>
      <td class="td-3"><span></span></td>
      <td class="td-4"></td>
      <td class="td-5"><span></span></td>
    </tr>
    <tr>
      <td class="td-1"><span></span></td>
      <td class="td-2"><span></span></td>
      <td class="td-3"><span></span></td>
      <td class="td-4"></td>
      <td class="td-5"><span></span></td>
    </tr>
    <tr>
      <td class="td-1"><span></span></td>
      <td class="td-2"><span></span></td>
      <td class="td-3"><span></span></td>
      <td class="td-4"></td>
      <td class="td-5"><span></span></td>
    </tr>
    <tr>
      <td class="td-1"><span></span></td>
      <td class="td-2"><span></span></td>
      <td class="td-3"><span></span></td>
      <td class="td-4"></td>
      <td class="td-5"><span></span></td>
    </tr>
    <tr>
      <td class="td-1"><span></span></td>
      <td class="td-2"><span></span></td>
      <td class="td-3"><span></span></td>
      <td class="td-4"></td>
      <td class="td-5"><span></span></td>
    </tr>
    <tr>
      <td class="td-1"><span></span></td>
      <td class="td-2"><span></span></td>
      <td class="td-3"><span></span></td>
      <td class="td-4"></td>
      <td class="td-5"><span></span></td>
    </tr>
    <tr>
      <td class="td-1"><span></span></td>
      <td class="td-2"><span></span></td>
      <td class="td-3"><span></span></td>
      <td class="td-4"></td>
      <td class="td-5"><span></span></td>
    </tr>
    <tr>
      <td class="td-1"><span></span></td>
      <td class="td-2"><span></span></td>
      <td class="td-3"><span></span></td>
      <td class="td-4"></td>
      <td class="td-5"><span></span></td>
    </tr><tr>
      <td class="td-1"><span></span></td>
      <td class="td-2"><span></span></td>
      <td class="td-3"><span></span></td>
      <td class="td-4"></td>
      <td class="td-5"><span></span></td>
                      </tr>
                      <tr>
      <td class="td-1"><span></span></td>
      <td class="td-2"><span></span></td>
      <td class="td-3"><span></span></td>
      <td class="td-4"></td>
      <td class="td-5"><span></span></td>
                      </tr>
                      <tr>
      <td class="td-1"><span></span></td>
      <td class="td-2"><span></span></td>
      <td class="td-3"><span></span></td>
      <td class="td-4"></td>
      <td class="td-5"><span></span></td>
                      </tr>
                              <tr>
      <td class="td-1"><span></span></td>
      <td class="td-2"><span></span></td>
      <td class="td-3"><span></span></td>
      <td class="td-4"></td>
      <td class="td-5"><span></span></td>
                      </tr>
                              <tr>
      <td class="td-1"><span></span></td>
      <td class="td-2"><span></span></td>
      <td class="td-3"><span></span></td>
      <td class="td-4"></td>
      <td class="td-5"><span></span></td>
    </tr>
  </tbody>
</table>
                          </div>
                      </div>
  )
}

export default MacComponent