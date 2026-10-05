import profilePic from './assets/card_unfocused/pic.png'
function SidePanel() {
  const profile = {
    image: profilePic,
    name: 'Joseph Allen D. Encarnacion',
    location: 'Bulacan, PH',
    description:
      'Computer Science Graduate specialized in Artificial Intelligence interested in Web Development | Game Development | Software Management | AI Training.',
    email: 'encarnacionjosephallen@gmail.com',
    phone: '+63 (906) 255-7599',
    linkedin: 'https://www.linkedin.com/in/joseph-allen-encarnacion/',
    github: 'https://github.com/hopgrab'
  }

  return (
    <aside className="flex h-full w-[25%] flex-col items-center gap-5 rounded-xl bg-[#061E29] p-10 shadow-md">
    <style>
      {`
        @keyframes ring-wiggle {
          0%, 100% { transform: rotate(0deg); }
          15% { transform: rotate(-20deg); }
          30% { transform: rotate(18deg); }
          45% { transform: rotate(-14deg); }
          60% { transform: rotate(10deg); }
          75% { transform: rotate(-6deg); }
          90% { transform: rotate(3deg); }
        }
        @keyframes email-pop {
          0% { transform: scale(1) rotate(0deg); }
          40% { transform: scale(1.2) rotate(-8deg); }
          70% { transform: scale(1.05) rotate(4deg); }
          100% { transform: scale(1.1) rotate(0deg); }
        }
        @keyframes icon-bounce {
          0%, 100% { transform: translateY(0); }
          30% { transform: translateY(-5px); }
          50% { transform: translateY(0); }
          70% { transform: translateY(-2px); }
        }
        @keyframes icon-spin {
          from { transform: rotate(0deg) scale(1); }
          50% { transform: rotate(180deg) scale(1.15); }
          to { transform: rotate(360deg) scale(1); }
        }
        .icon-circle {
          transition: background-color 0.2s ease;
        }
        .icon-circle:hover {
          background-color: #276583;
        }
        .icon-circle svg {
          transition: transform 0.2s ease;
        }
        .icon-circle:hover .email-icon {
          animation: email-pop 0.6s ease-in-out forwards;
        }
        .icon-circle:hover .phone-icon {
          animation: ring-wiggle 0.5s ease-in-out infinite;
        }
        .icon-circle:hover .linkedin-icon {
          animation: icon-bounce 0.7s ease-in-out infinite;
        }
        .icon-circle:hover .github-icon {
          animation: icon-spin 0.7s ease-in-out;
        }
      `}
    </style>

    <div className="h-[70%] w-[70%] overflow-hidden rounded-full border-4 border-[#5F9598] bg-gray-300">
        <img
        src={profile.image}
        alt={profile.name}
        className="h-full w-full object-cover"
        />
    </div>

    <h2 className="text-2xl font-semibold align-center text-white">{profile.name}</h2>

    <div className="flex items-center gap-1 text-sm text-white overflow-hidden">
        <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-4 w-4"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
        >
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17.657 16.657L13.414 20.9a2 2 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z"
        />
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
        />
        </svg>
        <span>{profile.location}</span>
    </div>

    <p className="text-center text-sm text-white">
        {profile.description}
    </p>

    <div className="mt-2 flex w-full flex-col gap-4">
    ```jsx
{/* Email */}
<div className="flex min-w-0 items-center gap-3 overflow-hidden text-sm text-white">
    <div className="icon-circle flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#1D546D]">
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className="email-icon h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
        </svg>
    </div>

    <span className="min-w-0 truncate">
        {profile.email}
    </span>
</div>

{/* Phone */}
<div className="flex min-w-0 items-center gap-3 overflow-hidden text-sm text-white">
    <div className="icon-circle flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#1D546D]">
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className="phone-icon h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498A2 2 0 0121 15.918V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
            />
        </svg>
    </div>

    <span className="min-w-0 truncate">
        {profile.phone}
    </span>
</div>

{/* LinkedIn */}
<a
    href={profile.linkedin}
    target="_blank"
    rel="noopener noreferrer"
    className="flex min-w-0 items-center gap-3 overflow-hidden text-sm text-white transition-colors hover:text-blue-700"
>
    <div className="icon-circle flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#1D546D]">
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className="linkedin-icon h-5 w-5 shrink-0"
            fill="currentColor"
            viewBox="0 0 24 24"
        >
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
    </div>

    <span className="min-w-0 truncate">
        {profile.linkedin}
    </span>
</a>

{/* GitHub */}
<a
    href={profile.github}
    target="_blank"
    rel="noopener noreferrer"
    className="flex min-w-0 items-center gap-3 overflow-hidden text-sm text-white transition-colors hover:text-[#cea5fb]"
>
    <div className="icon-circle flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#1D546D]">
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className="github-icon h-8 w-8 shrink-0"
            fill="currentColor"
            viewBox="-2 -2 20 20"
        >
            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82 0.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
        </svg>
    </div>

    <span className="min-w-0 truncate">
        {profile.github}
    </span>
</a>
```


    </div>

    </aside>
  )
}

export default SidePanel