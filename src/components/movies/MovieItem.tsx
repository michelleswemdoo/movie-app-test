export const MovieItem = () => {
  return (
    <div className="cursor-pointer rounded-lg bg-white text-slate-950 shadow-md">
      MovieItem
    </div>
  );
};

//   <div >
//     <Link
//       tabIndex={0}
//       className="block h-full"
//       aria-label={`Details for ${location?.address?.line} ${location?.address?.state_code}
//         ${location?.address?.postal_code}`}
//       href={`/listings/${encodeURIComponent(property_id)}`}
//     >
//       <div className="relative h-[200px] w-full">
//         <Image
//           src={primary_photo?.href}
//           alt={`Listing ${branding?.[0]?.name}`}
//           fill
//           sizes="100%"
//           className="block rounded-t-lg object-cover"
//         />
//       </div>
//       <div className="flex flex-col gap-[2px] p-3">
//         <div className="text-sm capitalize">{branding?.[0]?.name}</div>
//         <div className="text-lg font-semibold">
//           {currencyFormatter(list_price.toString())}
//         </div>
//         <ul className="flex items-center gap-4">
//           <li className="flex items-center gap-1">
//             <span className="font-semibold">{description?.beds}</span>
//             bed
//           </li>

//           <li className="flex items-center gap-[2px]">
//             <span className="font-semibold">{description?.baths}</span>
//             bath
//           </li>

//           <li className="flex items-center gap-[2px]">
//             <span className="font-semibold">{description?.sqft}</span>
//             sqft
//           </li>
//         </ul>

//         <div className="text-sm">{`${location?.address?.line} ${location?.address?.state_code} ${location?.address?.postal_code}`}</div>
//       </div>
//     </Link>
//   </div>;
