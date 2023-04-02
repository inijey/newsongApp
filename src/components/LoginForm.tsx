'use client'

import { useState } from "react";
import Button from "./ui/Buttom";

// 레이아웃 구조
// 유효성 검사

export default function LoginForm() {
//   const validUserContext = useContext(ValidUserContext);

//   const emailInputRef = useRef();
//   const passwordInputRef = useRef();

//   useEffect(() => {
//     if (isInitial) {
//       validUserContext.localAuthCheck();
//       isInitial = false;
//     }
//   }, [validUserContext]);

//   const submitHandler = (event) => {
//     event.preventDefault();

//     validUserContext.apiAuthCheck(
//       emailInputRef.current.value,
//       passwordInputRef.current.value
//     );
//   };
    type Info = { 
      id: string;
      pw: string;
    };

    const [info, setInfo] = useState<Info>({id:'', pw:''});

    const handleSumit = (e:any) => {};
    const handleChange = (e:any) => {
        const {name, value} = e.target;
        setInfo((info) => ({...info, [name]: value}));
    };

  return (
    <form onSubmit={handleSumit} className='h-full flex flex-col justify-between mt-10 px-20'>
        <div>
          <h1 className="flex justify-center text-3xl p-3">로그인</h1>
            <input 
                type="text" 
                name='id'
                value={info.id ?? ''}
                placeholder="아이디"
                onChange={handleChange}
                required
                className="block w-full px-3 py-2 mb-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                        focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"/>
            <input 
                type="password" 
                name='pw'
                value={info.pw ?? ''}
                placeholder="비밀번호"
                onChange={handleChange}
                required
                className="block w-full px-3 py-2 mb-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                        focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"/>
        </div>
        <Button text={'로그인'} onClick={()=>{}}/>
    </form>
  );
}