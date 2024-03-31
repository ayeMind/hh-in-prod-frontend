import { Container, Group, Flex, Divider, Burger, Drawer } from "@mantine/core"
import { Link } from "react-router-dom"
import classes from "./styles.module.css"
import { useDisclosure, useMediaQuery } from "@mantine/hooks";
import { FC } from "react";

const defaultLinks = [
  {link: '/', label: "Хакатоны"},
  {link: '/profile', label: "Профиль"},
]

const organizerLinks = [
    {link: '/hackathons/org', label: "Хакатоны"},
    {link: '/profile', label: 'Профиль'},
];

const userLinks = [
  {link: '/hackathons/user', label: "Хакатоны"},
  {link: '/hackathon/1/teams', label: 'Команды'},
  {link: '/resume', label: 'Мое резюме'},
  {link: '/profile', label: 'Профиль'},
];

const getLinks = (variant: "default" | "organizer" | "user") => {
  if (variant === "default") return defaultLinks;
  else if (variant === "organizer") return organizerLinks
  else return userLinks;
}

const getDataActive = (link: string) => {
  const path = window.location.pathname;
  if (path.split('/')[1] === "hackathons" && link === '/') {   
   return true;
  }
  else return path === link;
}
interface Props {
  variant: "default" | "organizer" | "user";
}

export const Header = ({ variant }: Props) => {
  
  const links = getLinks(variant)

    const isMobile = useMediaQuery('(max-width: 500px)')
    const [opened, {toggle, close}] = useDisclosure();

    const items = links.map((link) => {
      const dataActive = getDataActive(link.link)
       return (
        <Link
            className={ classes["link"] }
            data-active={ dataActive || undefined }
            key={ link.label }
            to={ link.link }>
            { link.label }
        </Link>
       )
  });

    return (
        <header className={ classes["header"] }>
            <Container size="md">
                <Flex justify={ "space-between" } align={ "center" } py="md">
                    <Logo/>
                    {
                        isMobile
                            ? <Burger
                                onClick={ toggle }
                                opened={ opened }/>
                            : <Group gap="md">
                                { items }
                            </Group>
                    }
                    {
                        isMobile && <Drawer
                            opened={ opened }
                            onClose={ close }
                            size='100%'
                            title={ <Logo/> }>
                            <Flex gap="md" direction={ "column" }>
                                { items }
                            </Flex>
                        </Drawer>
                    }
                </Flex>
                <Divider w={ "100%" } mb="xl"/>
            </Container>
        </header>
    );
};

const Logo: FC = () => {
    return <svg width="87" height="20" viewBox="0 0 117 27" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M22.1826 26H16.6284L11.1597 16.8228L5.63965 26H0.341797L8.04932 13.7466L1.04248 2.65527H6.47705L11.4502 10.9097L16.4575 2.65527H21.4478L14.3896 13.7466L22.1826 26ZM39.2554 26H35.2563L35.188 23.4023C34.6525 24.3252 33.9006 25.0373 32.9321 25.5386C31.9751 26.0285 30.9326 26.2734 29.8047 26.2734C28.654 26.2734 27.6229 26.0741 26.7114 25.6753C25.8114 25.2765 25.0993 24.6727 24.5752 23.8638C24.0511 23.0435 23.7891 22.0522 23.7891 20.8901C23.7891 18.7254 24.6379 17.2443 26.3354 16.4468C28.033 15.6493 30.1009 15.2505 32.5391 15.2505C32.8923 15.2505 33.1201 15.2562 33.2227 15.2676C33.3252 15.2676 33.5531 15.279 33.9062 15.3018C34.2594 15.3132 34.6183 15.3302 34.9829 15.353C34.9829 14.0656 34.6696 13.1086 34.043 12.4819C33.4163 11.8553 32.4479 11.542 31.1377 11.542C29.1553 11.542 27.3665 12.1743 25.7715 13.439L25.6348 9.54248C27.4919 8.75635 29.5028 8.36328 31.6675 8.36328C32.4764 8.36328 33.2796 8.44303 34.0771 8.60254C34.8747 8.76204 35.6095 9.02979 36.2817 9.40576C36.9653 9.77035 37.5293 10.2603 37.9736 10.8755C38.4294 11.4907 38.7256 12.1971 38.8623 12.9946C39.0104 13.7808 39.0845 14.7207 39.0845 15.8145C39.0845 16.9424 39.0845 18.076 39.0845 19.2153C39.0959 20.3547 39.1073 21.3971 39.1187 22.3428C39.1414 23.277 39.187 24.4961 39.2554 26ZM35.0513 18.1216C34.9373 18.0988 34.7607 18.0874 34.5215 18.0874H33.9746C32.9948 18.0874 32.0947 18.1444 31.2744 18.2583C30.4655 18.3608 29.7534 18.6343 29.1382 19.0786C28.5343 19.5116 28.2324 20.1496 28.2324 20.9927C28.2324 21.6763 28.5002 22.2231 29.0356 22.6333C29.5825 23.0321 30.2148 23.2314 30.9326 23.2314C32.2884 23.2314 33.3138 22.7301 34.0088 21.7275C34.7038 20.7249 35.0513 19.5229 35.0513 18.1216ZM63.54 26H57.9858L52.5171 16.8228L46.9971 26H41.6992L49.4067 13.7466L42.3999 2.65527H47.8345L52.8076 10.9097L57.8149 2.65527H62.8052L55.7471 13.7466L63.54 26Z"
            fill="black"/>
        <path
            d="M80.6128 26H76.6138L76.5454 23.4023C76.0099 24.3252 75.258 25.0373 74.2896 25.5386C73.3325 26.0285 72.29 26.2734 71.1621 26.2734C70.0114 26.2734 68.9803 26.0741 68.0688 25.6753C67.1688 25.2765 66.4567 24.6727 65.9326 23.8638C65.4085 23.0435 65.1465 22.0522 65.1465 20.8901C65.1465 18.7254 65.9953 17.2443 67.6929 16.4468C69.3905 15.6493 71.4583 15.2505 73.8965 15.2505C74.2497 15.2505 74.4775 15.2562 74.5801 15.2676C74.6826 15.2676 74.9105 15.279 75.2637 15.3018C75.6169 15.3132 75.9757 15.3302 76.3403 15.353C76.3403 14.0656 76.027 13.1086 75.4004 12.4819C74.7738 11.8553 73.8053 11.542 72.4951 11.542C70.5127 11.542 68.724 12.1743 67.1289 13.439L66.9922 9.54248C68.8493 8.75635 70.8602 8.36328 73.0249 8.36328C73.8338 8.36328 74.637 8.44303 75.4346 8.60254C76.2321 8.76204 76.967 9.02979 77.6392 9.40576C78.3228 9.77035 78.8867 10.2603 79.3311 10.8755C79.7868 11.4907 80.083 12.1971 80.2197 12.9946C80.3678 13.7808 80.4419 14.7207 80.4419 15.8145C80.4419 16.9424 80.4419 18.076 80.4419 19.2153C80.4533 20.3547 80.4647 21.3971 80.4761 22.3428C80.4989 23.277 80.5444 24.4961 80.6128 26ZM76.4087 18.1216C76.2948 18.0988 76.1182 18.0874 75.8789 18.0874H75.332C74.3522 18.0874 73.4521 18.1444 72.6318 18.2583C71.8229 18.3608 71.1108 18.6343 70.4956 19.0786C69.8918 19.5116 69.5898 20.1496 69.5898 20.9927C69.5898 21.6763 69.8576 22.2231 70.3931 22.6333C70.9399 23.0321 71.5723 23.2314 72.29 23.2314C73.6458 23.2314 74.6712 22.7301 75.3662 21.7275C76.0612 20.7249 76.4087 19.5229 76.4087 18.1216ZM96.7114 21.6934L96.9678 25.4702C95.4639 25.9146 94.1195 26.1367 92.9346 26.1367C91.613 26.1367 90.3996 25.9373 89.2944 25.5386C88.1893 25.1284 87.238 24.536 86.4404 23.7612C85.6543 22.9865 85.0505 22.0465 84.6289 20.9414C84.2188 19.8249 84.0137 18.5944 84.0137 17.25C84.0137 15.541 84.3783 14.0257 85.1074 12.7041C85.848 11.3825 86.8848 10.3571 88.2178 9.62793C89.5622 8.89876 91.0775 8.53418 92.7637 8.53418C94.0169 8.53418 95.2873 8.72217 96.5747 9.09814L96.2329 12.7041C95.2075 12.3053 94.2847 12.106 93.4644 12.106C92.5301 12.106 91.6927 12.3395 90.9521 12.8066C90.2116 13.2624 89.6419 13.8776 89.2432 14.6523C88.8558 15.4157 88.6621 16.2702 88.6621 17.2158C88.6621 18.7767 89.1178 20.0299 90.0293 20.9756C90.9408 21.9212 92.1655 22.394 93.7036 22.394C94.6834 22.394 95.686 22.1605 96.7114 21.6934ZM116.16 26H110.486L106.008 19.6597C105.473 18.8963 104.96 18.0703 104.47 17.1816C104.539 17.9108 104.573 18.6685 104.573 19.4546V26H100.095V0.79248H104.573V12.4819C104.573 13.6213 104.539 14.7663 104.47 15.917C105.028 15.0625 105.518 14.3732 105.94 13.8491L110.11 8.6709H115.322L108.879 16.4126L116.16 26Z"
            fill="black"/>
    </svg>

}
