/* eslint-disable react/jsx-key */
import React from 'react';
import { Link } from 'react-router-dom';

const footerNavs = [
  {
    to: '/terms',
    name: 'Terms',
  },
  {
    to: '/license',
    name: 'License',
  },
  {
    to: '/privacy',
    name: 'Privacy',
  },
  {
    to: 'about',
    name: 'About us',
  },
];

const Footer = () => {
  return (
    <footer className="bg-primary pt-16">
      <div className="mx-auto max-w-screen-xl px-4 md:px-8">
        <div className="justify-between sm:flex">
          <div className="space-y-6">
            <Link
              to={'/'}
              aria-label="Italiano Chefs Secret"
              title="Italiano Secret">
              <span className="font-logo text-4xl text-white">Italiano Chefs Secret</span>
            </Link>
            <p className="max-w-md font-logo text-gray-200">A Culinary Journey Through Italys Finest Dishes</p>
            <ul className="flex flex-wrap items-center gap-4 text-sm sm:text-base">
              {footerNavs.map((item, idx) => (
                <li
                  key={idx}
                  className="text-gray-200 duration-150 hover:text-gray-300">
                  <Link to={item.to}>{item.name}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-6">
            <p className="font-semibold text-gray-100">Get the app</p>
            <div className="mt-3 flex items-center gap-3 sm:block">
              <a href="#">
                <svg
                  className="w-32"
                  fill="none"
                  viewBox="0 0 338 100">
                  <path
                    fill="#000"
                    d="M324.477 99.751H13.532c-6.841 0-12.438-5.597-12.438-12.438V12.688C1.094 5.846 6.69.249 13.532.249h310.945c6.841 0 12.438 5.597 12.438 12.438v74.627c0 6.84-5.597 12.437-12.438 12.437z"
                  />
                  <path
                    fill="#A6A6A6"
                    d="M324.477.249H13.532C6.69.249 1.094 5.846 1.094 12.687v74.627c0 6.84 5.597 12.437 12.438 12.437h310.945c6.841 0 12.438-5.597 12.438-12.438V12.688c0-6.841-5.597-12.438-12.438-12.438zm0 1.99c5.761 0 10.448 4.687 10.448 10.448v74.627c0 5.76-4.687 10.448-10.448 10.448H13.532c-5.76 0-10.448-4.687-10.448-10.448V12.687c0-5.76 4.687-10.448 10.448-10.448h310.945z"
                  />
                  <path
                    fill="#fff"
                    d="M119.05 25.73c0 2.084-.617 3.744-1.853 4.982-1.404 1.472-3.234 2.208-5.483 2.208-2.155 0-3.986-.746-5.493-2.24-1.508-1.494-2.261-3.346-2.261-5.556s.753-4.061 2.261-5.556c1.507-1.494 3.338-2.24 5.493-2.24 1.068 0 2.092.208 3.063.625.972.418 1.751.973 2.335 1.668l-1.312 1.312c-.988-1.18-2.349-1.77-4.086-1.77-1.572 0-2.93.552-4.077 1.657-1.146 1.105-1.72 2.54-1.72 4.304 0 1.765.574 3.199 1.72 4.305 1.147 1.105 2.505 1.657 4.077 1.657 1.666 0 3.056-.555 4.168-1.667.722-.724 1.14-1.73 1.252-3.023h-5.42v-1.793h7.232c.07.39.104.764.104 1.127"
                  />
                  <path
                    fill="#fff"
                    d="M119.05 25.73h-.249c-.002 2.037-.596 3.618-1.78 4.806l-.003.002-.001.002c-1.359 1.421-3.106 2.129-5.303 2.132-2.097-.003-3.852-.718-5.318-2.168-1.462-1.453-2.185-3.226-2.188-5.38.003-2.154.726-3.926 2.188-5.378 1.466-1.45 3.221-2.167 5.318-2.17a7.45 7.45 0 012.965.606c.943.406 1.687.938 2.242 1.6l.191-.161-.176-.176-1.312 1.314.176.174.191-.159c-1.034-1.239-2.485-1.864-4.277-1.86-1.63-.002-3.063.58-4.249 1.727-1.197 1.15-1.798 2.665-1.796 4.484-.002 1.818.599 3.332 1.796 4.483 1.186 1.147 2.619 1.729 4.249 1.727 1.721.003 3.189-.581 4.344-1.74.772-.773 1.209-1.845 1.324-3.177l.023-.27h-5.443v-1.296h6.984v-.248l-.245.043c.068.378.1.736.1 1.083h.498c0-.378-.035-.767-.108-1.171l-.037-.204h-7.689v2.291h5.669v-.25l-.248-.021c-.11 1.252-.508 2.194-1.18 2.869-1.069 1.064-2.38 1.59-3.992 1.593-1.513-.002-2.797-.523-3.904-1.587-1.096-1.06-1.641-2.413-1.644-4.125.003-1.713.548-3.066 1.644-4.126 1.107-1.064 2.391-1.585 3.904-1.587 1.682.004 2.952.56 3.895 1.682l.175.208 1.503-1.505.162-.162-.147-.174c-.611-.728-1.426-1.307-2.427-1.736a7.938 7.938 0 00-3.161-.646c-2.212-.002-4.12.775-5.668 2.313-1.554 1.536-2.337 3.466-2.335 5.733-.002 2.265.781 4.196 2.336 5.733 1.547 1.537 3.455 2.313 5.667 2.311 2.303.002 4.213-.763 5.663-2.285l-.18-.172.176.176c1.288-1.288 1.928-3.027 1.926-5.158h-.249zM130.516 19.495h-6.797v4.733h6.13v1.793h-6.13v4.733h6.797v1.833h-8.713V17.662h8.713v1.833z"
                  />
                  <path
                    fill="#fff"
                    d="M130.516 19.495v-.248h-7.046v5.23h6.13v1.295h-6.13v5.23h6.797v1.336h-8.215V17.91h8.215v1.585h.249v-.248.248h.249v-2.082h-9.211v15.423h9.211v-2.332h-6.797V26.27h6.129v-2.292h-6.129v-4.234h6.797v-.249h-.249M138.604 32.587h-1.92V19.495h-4.168v-1.833h10.256v1.833h-4.168v13.092z"
                  />
                  <path
                    fill="#fff"
                    d="M138.604 32.587v-.249h-1.671V19.247h-4.168V17.91h9.758v1.337h-4.168v13.34h.249v-.249.25h.248V19.743h4.169v-2.331h-10.754v2.332h4.169v13.09H138.852v-.248h-.248M150.193 32.587V17.662h1.917v14.925h-1.917z"
                  />
                  <path
                    fill="#fff"
                    d="M150.193 32.587h.249V17.91h1.419v14.428h-1.668v.25h.249-.249v.248h2.166V17.413h-2.415v15.423h.249v-.249zM160.618 32.587h-1.92V19.495h-4.168v-1.833h10.256v1.833h-4.168v13.092z"
                  />
                  <path
                    fill="#fff"
                    d="M160.617 32.587v-.249h-1.67V19.247h-4.168V17.91h9.758v1.337h-4.168v13.34h.248v-.249.25h.249V19.743h4.169v-2.331h-10.754v2.332h4.169v13.09h2.416v-.248h-.249M174.674 29.409c1.105 1.118 2.457 1.677 4.055 1.677 1.599 0 2.951-.559 4.054-1.677 1.106-1.119 1.66-2.548 1.66-4.285 0-1.736-.554-3.166-1.66-4.284-1.103-1.119-2.455-1.677-4.054-1.677-1.598 0-2.95.558-4.055 1.677-1.103 1.118-1.656 2.548-1.656 4.284 0 1.737.553 3.166 1.656 4.285zm9.528 1.25c-1.468 1.508-3.292 2.261-5.473 2.261-2.182 0-4.006-.753-5.47-2.262-1.469-1.507-2.199-3.352-2.199-5.534 0-2.181.73-4.027 2.199-5.534 1.464-1.509 3.288-2.263 5.47-2.263 2.169 0 3.989.758 5.463 2.273 1.472 1.515 2.209 3.356 2.209 5.524 0 2.182-.735 4.027-2.199 5.534z"
                  />
                  <path
                    fill="#fff"
                    d="M174.674 29.409l-.177.175c1.146 1.163 2.575 1.754 4.232 1.75 1.656.004 3.087-.587 4.231-1.75 1.153-1.165 1.733-2.67 1.732-4.46.001-1.788-.579-3.295-1.732-4.459-1.144-1.163-2.575-1.754-4.231-1.75-1.657-.004-3.086.587-4.232 1.75-1.15 1.164-1.731 2.67-1.728 4.46-.003 1.788.578 3.294 1.728 4.459l.177-.175.177-.175c-1.055-1.074-1.583-2.425-1.585-4.11.002-1.684.53-3.035 1.585-4.109 1.065-1.074 2.337-1.6 3.878-1.603 1.54.003 2.815.53 3.877 1.603 1.057 1.074 1.585 2.425 1.587 4.11-.002 1.684-.53 3.035-1.587 4.109-1.062 1.074-2.337 1.6-3.877 1.603-1.541-.003-2.813-.53-3.878-1.603l-.177.175zm9.528 1.25l-.178-.174c-1.426 1.462-3.171 2.184-5.295 2.187-2.125-.003-3.869-.725-5.293-2.187l-.007-.007.007.007c-1.423-1.466-2.126-3.234-2.128-5.36.002-2.127.705-3.895 2.128-5.361 1.424-1.462 3.168-2.185 5.293-2.188 2.111.003 3.851.73 5.285 2.198 1.429 1.473 2.135 3.239 2.138 5.35-.003 2.127-.707 3.895-2.128 5.361l.178.173.179.173c1.508-1.549 2.27-3.47 2.269-5.706.001-2.225-.764-4.142-2.279-5.698-1.516-1.561-3.415-2.351-5.642-2.348-2.239-.003-4.143.783-5.649 2.339v-.001c-1.511 1.55-2.271 3.47-2.269 5.707-.002 2.237.758 4.158 2.269 5.708l.006.007-.006-.008c1.506 1.556 3.41 2.34 5.649 2.338 2.238.002 4.142-.782 5.652-2.338l-.179-.173M189.092 32.587V17.662h2.334l7.254 11.61h.083l-.083-2.876v-8.734h1.919v14.925h-2.001l-7.589-12.174h-.083l.083 2.878v9.296h-1.917z"
                  />
                  <path
                    fill="#fff"
                    d="M189.092 32.587h.249V17.91h1.947l7.254 11.611h.476l-.089-3.128V17.91h1.422v14.428h-1.615l-7.589-12.173h-.477l.09 3.13v9.043h-1.668v.25h.249-.249v.248h2.165v-9.55l-.082-2.88-.249.008v.248h.082v-.248l-.21.132 7.661 12.29H200.848V17.413H198.431v8.986l.083 2.88.249-.006v-.25h-.083v.25l.211-.132-7.327-11.728H188.844v15.423h.248v-.249zM267.104 74.876h4.642V43.778h-4.642v31.098zm41.808-19.896l-5.321 13.483h-.159L297.91 54.98h-5l8.281 18.844-4.721 10.482h4.843l12.761-29.326h-5.162zm-26.323 16.364c-1.522 0-3.642-.76-3.642-2.641 0-2.4 2.642-3.32 4.921-3.32 2.042 0 3 .44 4.241 1.04-.361 2.88-2.841 4.92-5.52 4.92zm.56-17.044c-3.361 0-6.841 1.48-8.281 4.761l4.119 1.72c.881-1.72 2.52-2.28 4.241-2.28 2.401 0 4.841 1.44 4.881 4.001v.32c-.841-.48-2.639-1.2-4.841-1.2-4.44 0-8.963 2.44-8.963 7 0 4.162 3.642 6.843 7.722 6.843 3.122 0 4.841-1.4 5.923-3.04h.159v2.4h4.48V62.9c0-5.52-4.119-8.601-9.44-8.601zm-28.687 4.466h-6.602v-10.66h6.602c3.47 0 5.44 2.873 5.44 5.33 0 2.41-1.97 5.33-5.44 5.33zm-.119-14.988h-11.122v31.098h4.639V63.094h6.483c5.144 0 10.201-3.725 10.201-9.658s-5.057-9.658-10.201-9.658zm-60.65 27.571c-3.206 0-5.891-2.684-5.891-6.372 0-3.727 2.685-6.452 5.891-6.452 3.166 0 5.651 2.726 5.651 6.452 0 3.688-2.485 6.372-5.651 6.372zm5.33-14.628h-.16c-1.042-1.242-3.046-2.364-5.571-2.364-5.29 0-10.139 4.649-10.139 10.62 0 5.931 4.849 10.54 10.139 10.54 2.525 0 4.529-1.122 5.571-2.404h.16v1.523c0 4.048-2.164 6.212-5.65 6.212-2.846 0-4.609-2.045-5.331-3.768l-4.047 1.683c1.162 2.806 4.248 6.252 9.378 6.252 5.45 0 10.059-3.206 10.059-11.02V54.997h-4.409v1.723zm7.614 18.155h4.649V43.777h-4.649v31.099zm11.502-10.26c-.12-4.088 3.166-6.17 5.531-6.17 1.844 0 3.406.92 3.926 2.244l-9.457 3.927zm14.428-3.526c-.881-2.365-3.568-6.733-9.058-6.733-5.45 0-9.978 4.288-9.978 10.58 0 5.931 4.488 10.58 10.499 10.58 4.85 0 7.656-2.966 8.818-4.689l-3.607-2.405c-1.202 1.764-2.846 2.926-5.211 2.926-2.364 0-4.047-1.082-5.13-3.205l14.147-5.852-.48-1.202zM119.86 57.603v4.489h10.74c-.321 2.525-1.163 4.368-2.445 5.65-1.563 1.564-4.007 3.287-8.295 3.287-6.613 0-11.783-5.33-11.783-11.943 0-6.612 5.17-11.943 11.783-11.943 3.566 0 6.171 1.403 8.095 3.207l3.165-3.166c-2.684-2.565-6.252-4.529-11.26-4.529-9.058 0-16.672 7.374-16.672 16.431 0 9.058 7.614 16.431 16.672 16.431 4.889 0 8.576-1.602 11.461-4.609 2.965-2.965 3.888-7.133 3.888-10.499 0-1.043-.08-2.004-.241-2.806H119.86zm27.559 13.746c-3.207 0-5.972-2.645-5.972-6.412 0-3.807 2.765-6.412 5.972-6.412 3.205 0 5.971 2.605 5.971 6.412 0 3.767-2.766 6.412-5.971 6.412zm0-16.992c-5.852 0-10.621 4.449-10.621 10.58 0 6.092 4.769 10.58 10.621 10.58 5.85 0 10.62-4.488 10.62-10.58 0-6.131-4.77-10.58-10.62-10.58zm23.167 16.992c-3.205 0-5.971-2.645-5.971-6.412 0-3.807 2.766-6.412 5.971-6.412 3.206 0 5.971 2.605 5.971 6.412 0 3.767-2.765 6.412-5.971 6.412zm0-16.992c-5.851 0-10.619 4.449-10.619 10.58 0 6.092 4.768 10.58 10.619 10.58s10.62-4.488 10.62-10.58c0-6.131-4.769-10.58-10.62-10.58z"
                  />
                  <path
                    fill="url(#paint0_linear_3_178167)"
                    d="M27.238 80.82l-.185-.177c-.724-.766-1.151-1.956-1.151-3.496v.363-55.015-.013.377c0-1.667.498-2.924 1.333-3.677l30.82 30.82L27.238 80.82zm-1.336-58.34zm.01-.408l.001-.006v.006zm.001-.017v-.003.003z"
                  />
                  <path
                    fill="url(#paint1_linear_3_178167)"
                    d="M68.327 60.643l.234-.133 12.172-6.916c1.16-.66 1.933-1.46 2.32-2.306-.385.847-1.16 1.648-2.32 2.307L68.56 60.511l-.234.132zm.003-.364L58.055 50.002 68.33 39.727l12.404 7.047c1.575.895 2.46 2.048 2.607 3.227v.005c-.148 1.175-1.032 2.33-2.607 3.225L68.33 60.278"
                  />
                  <path
                    fill="url(#paint2_linear_3_178167)"
                    d="M29.435 81.993c-.861 0-1.612-.28-2.198-.808v-.001c.587.529 1.339.81 2.2.81a4.73 4.73 0 00-.002 0zm0-.364c-.86 0-1.611-.28-2.197-.809l30.817-30.818L68.33 60.279 32.222 80.794c-.998.567-1.945.835-2.786.835zm-2.206-.45a3.364 3.364 0 01-.16-.157l.16.156z"
                  />
                  <path
                    fill="url(#paint3_linear_3_178167)"
                    d="M58.055 50.002l-30.82-30.82c.585-.527 1.336-.807 2.196-.807.843 0 1.79.269 2.791.836L68.33 39.727 58.055 50.002zm10.506-10.507L32.222 18.848c-1-.567-1.948-.837-2.791-.837h-.011.015c.841 0 1.788.268 2.787.836l36.34 20.648z"
                  />
                  <path
                    fill="#000"
                    d="M29.664 81.987c.782-.044 1.648-.313 2.558-.83l36.105-20.514-36.105 20.515c-.91.516-1.776.785-2.558.83zm-2.427-.802l-.008-.007a.068.068 0 01.008.007zm-.168-.163l-.016-.016.015.016z"
                  />
                  <path
                    fill="url(#paint4_linear_3_178167)"
                    d="M68.327 60.643l.234-.133-.234.133z"
                  />
                  <path
                    fill="url(#paint5_linear_3_178167)"
                    d="M29.437 81.993c-.861 0-1.614-.28-2.2-.81v.002a.068.068 0 00-.008-.007l-.16-.156-.016-.017.185-.185c.585.529 1.337.81 2.198.809.841 0 1.788-.268 2.786-.835L68.33 60.28l.231.231-.234.133-36.105 20.515c-.91.516-1.776.785-2.558.83a4.73 4.73 0 01-.227.005"
                  />
                  <path
                    fill="#000"
                    d="M27.053 81.006c-.724-.766-1.151-1.955-1.151-3.495v-.001c0 1.541.427 2.73 1.15 3.495v.001"
                  />
                  <path
                    fill="url(#paint6_linear_3_178167)"
                    d="M27.053 81.005c-.724-.766-1.151-1.954-1.151-3.495v-.362c0 1.54.427 2.729 1.15 3.495l.186.177-.185.185"
                  />
                  <path
                    fill="url(#paint7_linear_3_178167)"
                    d="M27.053 81.005l.185-.185-.185.185"
                  />
                  <path
                    fill="#000"
                    d="M83.052 51.289a3.08 3.08 0 00.288-1.283v-.002c0 .432-.096.864-.288 1.285z"
                  />
                  <path
                    fill="url(#paint8_linear_3_178167)"
                    d="M68.561 60.51l-.231-.231 12.403-7.048c1.575-.895 2.46-2.05 2.607-3.225 0 .431-.096.863-.288 1.282-.386.847-1.159 1.647-2.32 2.306l-12.17 6.916z"
                  />
                  <path
                    fill="#404040"
                    d="M83.34 50.002V50c-.001-1.301-.87-2.602-2.607-3.59L68.56 39.496v-.001l12.172 6.915c1.738.988 2.609 2.29 2.607 3.592z"
                  />
                  <path
                    fill="url(#paint9_linear_3_178167)"
                    d="M83.34 50c-.148-1.178-1.032-2.331-2.607-3.226l-12.404-7.047.231-.231h.001l12.172 6.915c1.736.988 2.606 2.289 2.607 3.59z"
                  />
                  <path
                    fill="#404040"
                    d="M25.902 22.482v-.003.003zm.01-.404v-.006.006zm.001-.012v-.011.011zm0-.014c.144-2.556 1.534-4.032 3.5-4.04-.853.004-1.595.284-2.176.808v-.001l-.007.007c-.061.055-.12.113-.177.174-.653.69-1.065 1.725-1.14 3.052z"
                  />
                  <path
                    fill="url(#paint10_linear_3_178167)"
                    d="M25.902 22.86v-.364-.014-.003c0-.137.003-.27.01-.4v-.007l.001-.006v-.011-.003c.075-1.327.487-2.361 1.14-3.052l.182.182c-.835.754-1.333 2.01-1.333 3.677zm1.328-4.034l.007-.007-.007.007z"
                  />
                  <path
                    fill="url(#paint11_linear_3_178167)"
                    d="M68.329 39.727L32.223 19.211c-1.002-.567-1.949-.836-2.792-.836-.86 0-1.61.28-2.196.807L27.053 19a3.33 3.33 0 01.177-.174l.007-.006c.58-.524 1.323-.804 2.175-.809H29.43c.844 0 1.791.27 2.792.837l36.34 20.647h-.002l-.231.232z"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_3_178167"
                      x1="55.322"
                      x2="13.575"
                      y1="21.915"
                      y2="63.662"
                      gradientUnits="userSpaceOnUse">
                      <stop stopColor="#00A0FF" />
                      <stop
                        offset=".007"
                        stopColor="#00A1FF"
                      />
                      <stop
                        offset=".26"
                        stopColor="#00BEFF"
                      />
                      <stop
                        offset=".512"
                        stopColor="#00D2FF"
                      />
                      <stop
                        offset=".76"
                        stopColor="#00DFFF"
                      />
                      <stop
                        offset="1"
                        stopColor="#00E3FF"
                      />
                    </linearGradient>
                    <linearGradient
                      id="paint1_linear_3_178167"
                      x1="85.259"
                      x2="25.067"
                      y1="50.003"
                      y2="50.003"
                      gradientUnits="userSpaceOnUse">
                      <stop stopColor="#FFE000" />
                      <stop
                        offset=".409"
                        stopColor="#FFBD00"
                      />
                      <stop
                        offset=".775"
                        stopColor="orange"
                      />
                      <stop
                        offset="1"
                        stopColor="#FF9C00"
                      />
                    </linearGradient>
                    <linearGradient
                      id="paint2_linear_3_178167"
                      x1="62.853"
                      x2="6.24"
                      y1="55.712"
                      y2="112.324"
                      gradientUnits="userSpaceOnUse">
                      <stop stopColor="#FF3A44" />
                      <stop
                        offset="1"
                        stopColor="#C31162"
                      />
                    </linearGradient>
                    <linearGradient
                      id="paint3_linear_3_178167"
                      x1="19.246"
                      x2="44.526"
                      y1=".687"
                      y2="25.967"
                      gradientUnits="userSpaceOnUse">
                      <stop stopColor="#32A071" />
                      <stop
                        offset=".069"
                        stopColor="#2DA771"
                      />
                      <stop
                        offset=".476"
                        stopColor="#15CF74"
                      />
                      <stop
                        offset=".801"
                        stopColor="#06E775"
                      />
                      <stop
                        offset="1"
                        stopColor="#00F076"
                      />
                    </linearGradient>
                    <linearGradient
                      id="paint4_linear_3_178167"
                      x1="85.259"
                      x2="25.067"
                      y1="50.004"
                      y2="50.004"
                      gradientUnits="userSpaceOnUse">
                      <stop stopColor="#CCB300" />
                      <stop
                        offset=".409"
                        stopColor="#CC9700"
                      />
                      <stop
                        offset=".775"
                        stopColor="#CC8400"
                      />
                      <stop
                        offset="1"
                        stopColor="#CC7D00"
                      />
                    </linearGradient>
                    <linearGradient
                      id="paint5_linear_3_178167"
                      x1="62.853"
                      x2="6.24"
                      y1="55.712"
                      y2="112.324"
                      gradientUnits="userSpaceOnUse">
                      <stop stopColor="#CC2E36" />
                      <stop
                        offset="1"
                        stopColor="#9C0E4E"
                      />
                    </linearGradient>
                    <linearGradient
                      id="paint6_linear_3_178167"
                      x1="55.322"
                      x2="13.575"
                      y1="21.915"
                      y2="63.662"
                      gradientUnits="userSpaceOnUse">
                      <stop stopColor="#008DE0" />
                      <stop
                        offset=".007"
                        stopColor="#008DE0"
                      />
                      <stop
                        offset=".26"
                        stopColor="#00A7E0"
                      />
                      <stop
                        offset=".512"
                        stopColor="#00B8E0"
                      />
                      <stop
                        offset=".76"
                        stopColor="#00C4E0"
                      />
                      <stop
                        offset="1"
                        stopColor="#00C7E0"
                      />
                    </linearGradient>
                    <linearGradient
                      id="paint7_linear_3_178167"
                      x1="62.854"
                      x2="6.242"
                      y1="55.712"
                      y2="112.327"
                      gradientUnits="userSpaceOnUse">
                      <stop stopColor="#E0333C" />
                      <stop
                        offset="1"
                        stopColor="#AB0F56"
                      />
                    </linearGradient>
                    <linearGradient
                      id="paint8_linear_3_178167"
                      x1="85.259"
                      x2="25.067"
                      y1="50.003"
                      y2="50.003"
                      gradientUnits="userSpaceOnUse">
                      <stop stopColor="#E0C500" />
                      <stop
                        offset=".409"
                        stopColor="#E0A600"
                      />
                      <stop
                        offset=".775"
                        stopColor="#E09100"
                      />
                      <stop
                        offset="1"
                        stopColor="#E08900"
                      />
                    </linearGradient>
                    <linearGradient
                      id="paint9_linear_3_178167"
                      x1="85.259"
                      x2="25.068"
                      y1="50.003"
                      y2="50.003"
                      gradientUnits="userSpaceOnUse">
                      <stop stopColor="#FFE840" />
                      <stop
                        offset=".409"
                        stopColor="#FFCE40"
                      />
                      <stop
                        offset=".775"
                        stopColor="#FFBC40"
                      />
                      <stop
                        offset="1"
                        stopColor="#FFB540"
                      />
                    </linearGradient>
                    <linearGradient
                      id="paint10_linear_3_178167"
                      x1="55.322"
                      x2="13.575"
                      y1="21.915"
                      y2="63.662"
                      gradientUnits="userSpaceOnUse">
                      <stop stopColor="#40B8FF" />
                      <stop
                        offset=".007"
                        stopColor="#40B9FF"
                      />
                      <stop
                        offset=".26"
                        stopColor="#40CEFF"
                      />
                      <stop
                        offset=".512"
                        stopColor="#40DDFF"
                      />
                      <stop
                        offset=".76"
                        stopColor="#40E7FF"
                      />
                      <stop
                        offset="1"
                        stopColor="#40EAFF"
                      />
                    </linearGradient>
                    <linearGradient
                      id="paint11_linear_3_178167"
                      x1="19.246"
                      x2="44.526"
                      y1=".687"
                      y2="25.967"
                      gradientUnits="userSpaceOnUse">
                      <stop stopColor="#65B895" />
                      <stop
                        offset=".069"
                        stopColor="#62BD95"
                      />
                      <stop
                        offset=".476"
                        stopColor="#50DB97"
                      />
                      <stop
                        offset=".801"
                        stopColor="#44ED98"
                      />
                      <stop
                        offset="1"
                        stopColor="#40F498"
                      />
                    </linearGradient>
                  </defs>
                </svg>
              </a>
              <a
                href="#"
                className="mt-0 block sm:mt-3">
                <svg
                  className="w-32"
                  fill="none"
                  viewBox="0 0 300 100">
                  <g clipPath="url(#clip0_3_178097)">
                    <path
                      fill="#A6A6A6"
                      d="M275.749 0h-251.5c-.917 0-1.823 0-2.737.005-.765.005-1.524.02-2.297.032-1.679.02-3.354.167-5.01.442-1.654.28-3.256.808-4.752 1.567a16.094 16.094 0 00-4.047 2.947 15.646 15.646 0 00-2.945 4.053 16.503 16.503 0 00-1.563 4.758 32.483 32.483 0 00-.448 5.005c-.023.766-.026 1.535-.038 2.302v57.786c.012.776.015 1.528.038 2.304.02 1.678.17 3.351.448 5.005a16.468 16.468 0 001.563 4.76 15.52 15.52 0 002.945 4.037 15.687 15.687 0 004.047 2.946 16.754 16.754 0 004.752 1.578 33.64 33.64 0 005.01.441c.773.017 1.532.027 2.297.027.914.005 1.82.005 2.737.005h251.5c.899 0 1.812 0 2.71-.005.762 0 1.543-.01 2.305-.027a33.196 33.196 0 005-.442 17.011 17.011 0 004.77-1.577 15.678 15.678 0 004.043-2.946 15.95 15.95 0 002.954-4.036 16.509 16.509 0 001.548-4.76c.279-1.655.434-3.328.464-5.006.01-.776.01-1.528.01-2.304.019-.909.019-1.812.019-2.735V23.84c0-.915 0-1.823-.019-2.729 0-.767 0-1.536-.01-2.302a33.726 33.726 0 00-.464-5.005 16.53 16.53 0 00-1.548-4.758 16.163 16.163 0 00-6.997-7 16.915 16.915 0 00-4.77-1.568 32.618 32.618 0 00-5-.441c-.762-.013-1.543-.027-2.305-.032C277.561 0 276.648 0 275.749 0z"
                    />
                    <path
                      fill="#000"
                      d="M21.524 97.813c-.762 0-1.505-.01-2.26-.027a31.713 31.713 0 01-4.673-.408 14.71 14.71 0 01-4.142-1.37 13.517 13.517 0 01-3.493-2.541 13.304 13.304 0 01-2.551-3.492 14.305 14.305 0 01-1.357-4.142 31.033 31.033 0 01-.417-4.688c-.016-.527-.036-2.283-.036-2.283V21.111s.022-1.729.036-2.236c.02-1.569.158-3.133.414-4.68a14.389 14.389 0 011.359-4.156 13.433 13.433 0 012.538-3.495 13.913 13.913 0 013.506-2.556 14.558 14.558 0 014.133-1.36c1.55-.253 3.118-.39 4.689-.41l2.256-.03h256.921l2.283.031a30.98 30.98 0 014.646.407c1.452.246 2.86.708 4.177 1.37a13.982 13.982 0 016.037 6.05 14.367 14.367 0 011.338 4.122c.26 1.56.405 3.136.435 4.718.007.707.007 1.468.007 2.225.02.937.02 1.83.02 2.73v52.321c0 .908 0 1.794-.02 2.688 0 .813 0 1.558-.01 2.324a31.846 31.846 0 01-.427 4.634 14.35 14.35 0 01-1.35 4.175 13.708 13.708 0 01-2.539 3.464 13.523 13.523 0 01-3.498 2.556 14.656 14.656 0 01-4.17 1.375 31.378 31.378 0 01-4.673.408 98.51 98.51 0 01-2.244.026l-2.71.005-254.225-.004z"
                    />
                    <path
                      fill="#fff"
                      d="M62.334 50.75a12.37 12.37 0 015.892-10.38 12.665 12.665 0 00-9.978-5.394c-4.198-.44-8.268 2.512-10.407 2.512-2.181 0-5.475-2.468-9.022-2.395a13.288 13.288 0 00-11.182 6.82c-4.835 8.37-1.229 20.673 3.403 27.44 2.317 3.313 5.026 7.014 8.57 6.883 3.467-.144 4.762-2.211 8.948-2.211 4.147 0 5.362 2.211 8.977 2.128 3.721-.06 6.066-3.328 8.301-6.673a27.405 27.405 0 003.796-7.731 11.954 11.954 0 01-7.298-10.998zM55.505 30.528a12.18 12.18 0 002.786-8.727 12.394 12.394 0 00-8.018 4.15 11.59 11.59 0 00-2.86 8.403 10.246 10.246 0 008.092-3.826zM106.168 67.85H94.334l-2.841 8.39H86.48L97.69 45.195h5.207l11.209 31.045h-5.098l-2.839-8.39zM95.56 63.976h9.38l-4.624-13.618h-.129L95.56 63.977zM138.311 64.924c0 7.034-3.764 11.553-9.445 11.553a7.671 7.671 0 01-7.122-3.96h-.108v11.21h-4.646V53.606h4.498v3.765h.085a8.027 8.027 0 017.207-4.001c5.745 0 9.531 4.54 9.531 11.555zm-4.775 0c0-4.583-2.368-7.595-5.981-7.595-3.55 0-5.938 3.076-5.938 7.595 0 4.56 2.388 7.615 5.938 7.615 3.613 0 5.981-2.991 5.981-7.615zM163.223 64.924c0 7.034-3.764 11.553-9.445 11.553a7.673 7.673 0 01-7.122-3.96h-.107v11.21h-4.646V53.606h4.497v3.765h.085a8.028 8.028 0 017.207-4.001c5.745 0 9.531 4.54 9.531 11.555zm-4.775 0c0-4.583-2.368-7.595-5.981-7.595-3.55 0-5.938 3.076-5.938 7.595 0 4.56 2.388 7.615 5.938 7.615 3.613 0 5.981-2.991 5.981-7.615zM179.688 67.59c.345 3.079 3.335 5.1 7.422 5.1 3.916 0 6.734-2.021 6.734-4.797 0-2.41-1.7-3.853-5.723-4.841l-4.023-.97c-5.701-1.377-8.348-4.043-8.348-8.369 0-5.356 4.668-9.035 11.297-9.035 6.56 0 11.057 3.679 11.208 9.035h-4.69c-.281-3.098-2.842-4.968-6.584-4.968-3.743 0-6.304 1.892-6.304 4.646 0 2.195 1.636 3.486 5.637 4.475l3.421.84c6.369 1.506 9.016 4.065 9.016 8.606 0 5.808-4.627 9.446-11.985 9.446-6.885 0-11.533-3.553-11.834-9.168h4.756zM208.778 48.252v5.356h4.304v3.68h-4.304v12.477c0 1.939.862 2.842 2.754 2.842a14.48 14.48 0 001.528-.108v3.658c-.851.159-1.715.23-2.581.215-4.582 0-6.369-1.722-6.369-6.111V57.287h-3.291v-3.68h3.291v-5.355h4.668zM215.575 64.926c0-7.121 4.194-11.596 10.735-11.596 6.562 0 10.737 4.475 10.737 11.596 0 7.141-4.153 11.597-10.737 11.597-6.583 0-10.735-4.456-10.735-11.597zm16.738 0c0-4.885-2.239-7.768-6.003-7.768-3.765 0-6.001 2.905-6.001 7.768 0 4.905 2.236 7.766 6.001 7.766 3.764 0 6.003-2.86 6.003-7.766zM240.877 53.605h4.432v3.853h.107a5.402 5.402 0 015.444-4.09 7.157 7.157 0 011.592.174v4.346a6.493 6.493 0 00-2.087-.281 4.685 4.685 0 00-4.637 3.215 4.69 4.69 0 00-.205 1.992V76.24h-4.646V53.605zM273.873 69.594c-.625 4.11-4.627 6.929-9.746 6.929-6.585 0-10.672-4.412-10.672-11.49 0-7.099 4.109-11.703 10.477-11.703 6.262 0 10.2 4.301 10.2 11.164v1.592h-15.987v.28a5.902 5.902 0 003.647 5.979 5.891 5.891 0 002.442.433 5.122 5.122 0 005.227-3.184h4.412zm-15.706-6.755h11.316a5.45 5.45 0 00-1.52-4.085 5.451 5.451 0 00-4.031-1.66 5.731 5.731 0 00-5.765 5.745zM94.978 21.828a6.599 6.599 0 017.019 7.412c0 4.766-2.576 7.505-7.02 7.505H89.59V21.828h5.388zm-3.072 12.808h2.813a4.689 4.689 0 004.92-5.365 4.702 4.702 0 00-4.92-5.335h-2.813v10.7zM104.614 31.113a5.334 5.334 0 017.467-5.385 5.328 5.328 0 012.902 3.194c.235.705.32 1.452.249 2.191a5.336 5.336 0 01-9.259 4.102 5.334 5.334 0 01-1.359-4.102zm8.333 0c0-2.44-1.097-3.867-3.02-3.867-1.932 0-3.018 1.427-3.018 3.867 0 2.46 1.087 3.876 3.018 3.876 1.923 0 3.02-1.426 3.02-3.875zM129.345 36.745h-2.304l-2.327-8.29h-.176l-2.317 8.29h-2.282l-3.103-11.257h2.253l2.017 8.59h.166l2.314-8.59h2.132l2.314 8.59h.176l2.007-8.59h2.221l-3.091 11.257zM135.046 25.487h2.139v1.788h.166a3.368 3.368 0 013.359-2.006 3.658 3.658 0 013.771 2.565c.163.525.206 1.08.126 1.623v7.287h-2.222v-6.73c0-1.808-.786-2.708-2.429-2.708a2.582 2.582 0 00-2.688 2.853v6.586h-2.222V25.487zM148.147 21.093h2.221v15.652h-2.221V21.093zM153.457 31.11a5.34 5.34 0 011.362-4.095 5.343 5.343 0 013.947-1.747 5.33 5.33 0 015.061 3.65 5.34 5.34 0 01.249 2.192 5.336 5.336 0 11-10.619 0zm8.332 0c0-2.44-1.096-3.867-3.02-3.867-1.931 0-3.017 1.427-3.017 3.867 0 2.46 1.086 3.875 3.017 3.875 1.924 0 3.02-1.425 3.02-3.875zM166.415 33.563c0-2.026 1.508-3.194 4.187-3.36l3.049-.176v-.972c0-1.189-.786-1.86-2.305-1.86-1.24 0-2.099.455-2.346 1.251h-2.151c.227-1.933 2.046-3.174 4.6-3.174 2.822 0 4.414 1.405 4.414 3.783v7.692h-2.139v-1.582h-.176a3.78 3.78 0 01-3.381 1.767 3.398 3.398 0 01-3.752-3.369zm7.236-.962v-.94l-2.749.175c-1.55.104-2.254.631-2.254 1.624 0 1.013.879 1.602 2.088 1.602a2.654 2.654 0 002.915-2.46zM178.783 31.112c0-3.557 1.828-5.811 4.673-5.811a3.712 3.712 0 013.452 1.975h.166v-6.183h2.221v15.652h-2.128v-1.778h-.176a3.909 3.909 0 01-3.535 1.964c-2.864 0-4.673-2.254-4.673-5.82zm2.295 0c0 2.387 1.125 3.824 3.008 3.824 1.872 0 3.029-1.457 3.029-3.815 0-2.346-1.169-3.824-3.029-3.824-1.871 0-3.008 1.446-3.008 3.815zM198.487 31.113a5.34 5.34 0 013.151-5.384 5.336 5.336 0 017.219 3.193c.234.705.319 1.452.248 2.191a5.335 5.335 0 01-5.309 5.851 5.333 5.333 0 01-5.309-5.85zm8.333 0c0-2.44-1.096-3.867-3.02-3.867-1.931 0-3.018 1.427-3.018 3.867 0 2.46 1.087 3.876 3.018 3.876 1.924 0 3.02-1.426 3.02-3.875zM212.086 25.487h2.139v1.788h.166a3.368 3.368 0 013.359-2.006 3.658 3.658 0 013.771 2.565c.163.525.206 1.08.126 1.623v7.287h-2.222v-6.73c0-1.808-.786-2.708-2.429-2.708a2.59 2.59 0 00-2 .809 2.59 2.59 0 00-.688 2.044v6.586h-2.222V25.487zM234.2 22.685v2.854h2.439v1.871H234.2V33.2c0 1.18.486 1.696 1.592 1.696.283-.001.566-.019.847-.052v1.85c-.399.072-.803.11-1.208.114-2.471 0-3.455-.869-3.455-3.04V27.41h-1.787V25.54h1.787v-2.854h2.224zM239.674 21.093h2.202v6.204h.176a3.462 3.462 0 013.432-2.017 3.711 3.711 0 013.738 2.586c.164.52.212 1.07.139 1.611v7.268h-2.224v-6.72c0-1.798-.837-2.709-2.407-2.709a2.626 2.626 0 00-2.688 1.728c-.13.36-.18.745-.146 1.126v6.575h-2.222V21.093zM262.316 33.704a4.57 4.57 0 01-4.878 3.257 5.11 5.11 0 01-5.026-3.618 5.131 5.131 0 01-.175-2.193 5.192 5.192 0 015.191-5.881c3.132 0 5.022 2.14 5.022 5.675v.775h-7.949v.124a2.977 2.977 0 002.998 3.225 2.695 2.695 0 002.678-1.364h2.139zm-7.815-3.628h5.686a2.723 2.723 0 00-.74-2.072 2.725 2.725 0 00-2.031-.845 2.88 2.88 0 00-2.915 2.917z"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_3_178097">
                      <path
                        fill="#fff"
                        d="M0 0h299.16v100H0z"
                        transform="translate(.412)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-10 border-t py-10 text-gray-200 md:text-center">
          <p>© 2022 Italiano Chefs Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
