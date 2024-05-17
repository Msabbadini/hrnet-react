import Flex from "#/components/layouts/flex";
import Header from "#/components/molecules/header";
import CreateEmployee from "#/components/organisms/createemployee";

function Layout({content}){
    return (
        <Flex>
            <div>
                {content}
            </div>
        </Flex>
    )
}

const Page = () => {
    return (
        <div >
            <Header/>
            <Layout
             content={
                <Flex className="flex flex-row">
                   <CreateEmployee/>
                </Flex>
             }/>
        </div>
    )

}

export default Page;
