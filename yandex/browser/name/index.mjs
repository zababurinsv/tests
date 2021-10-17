export default function(firstName, lastName) {
    let badge = {}
    if( typeof firstName === 'string'
        && typeof lastName === 'string'
        && firstName.split(' ').length === 1
        && lastName.split(' ').length === 1
        && firstName.length !== 0
        && lastName.length !== 0) {
        badge = new Proxy({
            firstName: firstName,
            lastName: lastName,
            fullName: `${lastName} ${firstName}`
        },  {
            set: (obj, prop, value) => {
                switch (prop) {
                    case 'firstName':
                        let firstName = value.split(' ')
                        if(typeof value === 'string' && firstName.length === 1 && value.length !== 0) {
                            obj.fullName = `${obj.lastName} ${value}`
                            obj[prop] = value;
                        }
                        break
                    case 'lastName':
                        let lastName = value.split(' ')
                        if(typeof value === 'string' && lastName.length === 1  && value.length !== 0) {
                            obj.fullName = `${value} ${obj.firstName}`
                            obj[prop] = value;
                        }
                        break
                    case 'fullName':
                        let fullName = value.split(' ')
                        console.log('ssssssssssss', value, fullName)
                        if(typeof value === 'string' && fullName.length === 2) {
                            obj.firstName = fullName[1]
                            obj.lastName = fullName[0]
                            obj[prop] = value;
                        }
                        break
                }
                return true
            }
        });
    } else {
        badge = {}
    }
    return badge;
}