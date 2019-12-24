import { type } from "os";

const enum TSections {
    ID = 1,
    Author = 2,
    Title = 3,
    Publisher = 4,
    Year = 5,
    Pages = 6,
    Lang = 7,
    Size = 8,
    Ext = 9,
    Mirror = 10
}

type EntryData = {
    ID: string;
    Author: string;
    Title: string;
    Publisher: string;
    Year: string;
    Pages: string;
    Lang: string;
    Size: string;
    Ext: string;
    Mirror: string;
}

const container: string = '.c tbody';
const buildCellSelector = (row: number, col: number): string => {
    return `${container} tr:nth-child(${row}) td:nth-child(${col})`;
}

const getEntryData = (id: number): EntryData => {
    return {
        ID: buildCellSelector(id, TSections.ID),
        Author: buildCellSelector(id, TSections.Author),
        Title: buildCellSelector(id, TSections.Title),
        Publisher: buildCellSelector(id, TSections.Publisher),
        Year: buildCellSelector(id, TSections.Year),
        Pages: buildCellSelector(id, TSections.Pages),
        Lang: buildCellSelector(id, TSections.Lang),
        Size: buildCellSelector(id, TSections.Size),
        Ext: buildCellSelector(id, TSections.Ext),
        Mirror: buildCellSelector(id, TSections.Mirror),
    }
}

const THeadRow = 1;
const THeads: EntryData = getEntryData(THeadRow);

export default {
    THeads,
    getEntryData
}