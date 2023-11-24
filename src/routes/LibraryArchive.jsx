import ArchiveList from "../components/ArchiveList"

export default function LibraryArchive() {
    return (
        <>
            <div className="lib__container">
                <div className="lib__sort">
                    <h3 className="lib__sort_title">Archive</h3>
                    <label>
                        Sort By:
                        <select>
                            <option>All</option>
                            <option>Recent</option>
                            <option>Shuffle</option>
                        </select>
                    </label>
                </div>
            </div>
            <ArchiveList />
        </>
    )
}