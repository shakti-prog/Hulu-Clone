import {HomeIcon,BadgeCheckIcon,CollectionIcon,UserIcon,SearchIcon,LightningBoltIcon} from '@heroicons/react/outline'
import HeadItem from './HeadItem';

function Header() {
    return (
        <header className="flex flex-col sm:flex-row m-5 justify-between items-center">
           <div className="flex flex-grow justify-evenly max-w-2xl">
                <HeadItem title="Home" Icon={HomeIcon} />
                <HeadItem title="Verified" Icon={BadgeCheckIcon} />
                <HeadItem title="Collections" Icon={CollectionIcon} />
                <HeadItem title="Account" Icon={UserIcon} />
                <HeadItem title="Search" Icon={SearchIcon} />
                <HeadItem title="Trending" Icon={LightningBoltIcon} />
           </div>
        </header>
    )
}

export default Header;
