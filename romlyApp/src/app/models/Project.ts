export class Project {

    public Id!: number
    public Name!: string
    public Description!: string
    public URL!: string

    constructor(id: number, name: string, description: string, url: string) {
        this.Id = id;
        this.Name = name;
        this.Description = description;
        this.URL = url;
    }
}