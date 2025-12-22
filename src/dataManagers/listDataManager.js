import ApiClient from "./apiClient";

let listApiClient = ApiClient({ primaryEndpoint: 'lists'});
const ListsDataManager = {
    getAllLists: async () => {
        console.log("Grabbing lists");
        return await listApiClient.getEm();
    },
    getListById: async (id) => {
        console.log(id)
        return null;
    },
    createList: async (listData) => {
        console.log("Creating list with data:", listData);
        return await listApiClient.create(listData);
    }
}

export default ListsDataManager;