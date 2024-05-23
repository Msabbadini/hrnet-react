import Flex from "#/components/layouts/flex";
import Header from "#/components/molecules/header";
import type { RootState } from "#/redux/store";
import { useSelector } from "react-redux";
import Table, { type ColumnHeader } from "hrnet-ts-table";
import "hrnet-ts-table/dist/index.css";

function Layout({ content }:any) {
    return (
        <Flex>
            <div>
                {content}
            </div>
        </Flex>
    )
}



const PageListCurrentEmployees = () => {
    const dataList = useSelector((state:RootState) => state.employee)

    const filterStreet = (a: string, b: string) => {
        const streetA = a.split(' ');
        const streetB = b.split(' ');
      
        const numberA = Number.parseInt(streetA[0]);
        const numberB = Number.parseInt(streetB[0]);
      
        const nameA = streetA.slice(1).join(' ').toLowerCase();
        const nameB = streetB.slice(1).join(' ').toLowerCase();
      
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
        if (nameA === nameB) {
          return numberA - numberB;
        }
        return 0;
      }
    const filterDate = (a: string,b: string) => {
        const dateA = new Date(a.split('/').reverse().join('/'))
        const dateB = new Date(b.split('/').reverse().join('/'))
        return dateA.getTime() - dateB.getTime()
    }

    const filterZipCode = (a: string, b: string) => {
        const zipA = a.split("-").join("").split(" ").join("")
        const zipB = b.split("-").join("").split(" ").join("")
        return +zipA - (+zipB)

    }

    const columns:Array<ColumnHeader> = [
        { sortKey: "firstName", title: "First Name",  },
        { sortKey: "lastName", title: "Last Name" },
        { sortKey: "startDate", title: "Start Date", type: "date", sort:filterDate },
        { sortKey: "department", title: "Department" },
        { sortKey: "dateOfBirth", title: "Date of Birth",type: "date",sort:filterDate  },
        { sortKey: "street", title: "Street", sort:filterStreet,  },
        { sortKey: "city", title: "City", enableSort: false},
        { sortKey: "state", title: "State" },
        { sortKey: "zipCode", title: "Zip Code", sort:filterZipCode },
    ]
    return (
        <div>
            <Header />
            <Layout
                content={
                    <Flex className="flex flex-row">
                        <div className=" ">
                            <Table columns={columns} entries={dataList} />
                        </div>
                    </Flex>
                } />
        </div>
    )

}

export default PageListCurrentEmployees;
