export interface TeacherResponse {
    tf: string | null
    timestamp: string
    firstname: string
    lastname: string
    'e-mail': string
    uploadyourphotograph: string
    shareyourexperienceswishesadvicegeneralthoughts: string
    kindlyprovideyourfullnamebelowtoprovideyourconsenttoelesatoincludeyourphotoandquoteintheyearbook2021: string
}

export interface StudentResponse {
    tf: string | null
    describeyourexperiencejourneymemoriesinaquote: string
    firstname: string
    'kindlyprovideyourfullnamebelowtoprovideyourconsenttoelesatoincludeyourphotoandquoteintheyearbook2021.': string
    lastname: string
    timestamp: string
    uploadyourphotograph: string
    'yearfortheacademicyear2020-21': string
}

export interface CoreResponse {
    firstname: string 
    lastname: string 
    'yearfortheacademicyear2020-21': string
    uploadyourphotograph: string 
    describeyourexperiencejourneymemoriesinaquote: string
}