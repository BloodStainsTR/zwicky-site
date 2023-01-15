import Head from 'next/head'
import Image from 'next/image'
import swr from '../lib/swr';
import Tippy from '@tippyjs/react';


export default function Home() {
  const { data: _repositories } = swr("/api/repos");
  const repositories = _repositories ? _repositories : null;

  return (
    <>
      <div className="bg-neutral-800/10 shadow-xl rounded-lg w-full h-auto mt-6">
          <div className="relative">
            <div className="flex flex-col lg:flex-row justify-between w-full p-6 px-8 items-center h-full">
              <div className="flex flex-col lg:justify-start justify-center items-center lg:items-start mt-5 lg:mt-0 w-full">
                <div className="flex items-center">
                <p className="flex items-center text-white text-4xl font-semibold">
                  Zwicky
                </p>
                  <Tippy content={`Online`} animation="shift-away" arrow={false}>
                    <span className={`ml-2 text-online px-2 py-1 font-normal rounded-md text-sm`}>
                          <i className={`fa fa-circle text-online mr-2`} />Online
                    </span>
                  </Tippy>
            
                </div>
                <p className="text-white/50 text-md mt-3">
I am a professional editor and software developer. I have been professionally interested in community management and development for 5 years, I have high level knowledge and experience in areas such as community management and social media management.
                </p>
              </div>
              <div className={`order-first lg:order-last flex-shrink-0 relative w-[160px] h-[160px] rounded-full pulse-avatar-online `}>
                <img alt="zwicky" src={`https://i.scdn.co/image/ab6775700000ee856570e21be6ccdaada78f5782`} width="160" height="160" className={`bg-neutral-700 w-[160px] h-[160px] rounded-full`} />
                <div className={`bg-[#040404] rounded-full px-[4px] py-[1px] flex items-center absolute bottom-0 right-4`}>
                  <Tippy content="Online" animation="shift-away" arrow={false}>
                    <i className={`fad fa-circle text-2xl text-online`} />
                  </Tippy>
                </div>
              </div>
              
            </div>
            <br></br>
          </div>
      </div>

        <div className="py-20">
        <p className="text-3xl text-white font-semibold">Latest Hits</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-3 w-full gap-4 items-center mt-2">
          {_projects ? (
            projects ? (
              projects.map((_, __) => (
                <a href={_.link} target="_blank" rel="noreferrer" key={__} className="bg-neutral-800/10 p-4 hover:bg-neutral-800/20 shadow-lg hover:shadow-xl transition-all duration-200 rounded-lg w-full">
                  <img alt="umut" src={_.image} width="1024" className="rounded-lg" height="512" />
                  <p className="text-xl font-semibold mt-5">{_.name}</p>
                  <p className="text-md font-normal text-white/50 h-24 overflow-small" style={{ "overflow": 'auto' }}>{_.description}</p>
                </a>
              ))
            ) : (
              Array.from({ length: 3 }).map((_, __) => (
                <div key={__} className="bg-neutral-800/20 p-4 rounded-lg w-full">
                  <div className="flex-shrink-0 w-[100%] h-[8.6rem]">
                    <div className="w-full h-full bg-neutral-700/30 rounded-lg animate-pulse" />
                  </div>
                  <div className="bg-neutral-700/30 animate-pulse w-1/2 h-[24px] rounded-md mt-5" />
                  <div className="mt-2 bg-neutral-700/30 animate-pulse w-full h-[96px] rounded-md" />
                </div>
              ))
            )
          ) : (
            Array.from({ length: 3 }).map((_, __) => (
              <div key={__} className="bg-neutral-800/20 p-4 rounded-lg w-full">
                <div className="flex-shrink-0 w-[100%] h-[8.6rem]">
                  <div className="w-full h-full bg-neutral-700/30 rounded-lg animate-pulse" />
                </div>
                <div className="bg-neutral-700/30 animate-pulse w-1/2 h-[24px] rounded-md mt-5" />
                <div className="mt-2 bg-neutral-700/30 animate-pulse w-full h-[96px] rounded-md" />
              </div>
            ))
          )}
        </div>
      </div>


    </>
  )
}
