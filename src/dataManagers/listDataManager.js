import ApiClient from "./apiClient";

let listApiClient = ApiClient({ primaryEndpoint: 'lists'});
const ListsDataManager = {
    getAllLists: async () => {
        //todo
        return [];
    },
    getListById: async (id) => {
        //todo
        return null;
    },
    createList: async (listData) => {
        console.log("Creating list with data:", listData);
        return await listApiClient.create(listData);
    }
}

export default ListsDataManager;