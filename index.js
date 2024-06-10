// add more complex scripts as needed
console.log("Hello from index.js!");
document.addEventListener('DOMContentLoaded', (event) => {
    const driver = window.driver.js.driver
    const driverObj = driver({
        showProgress: true,
        steps: [
            
            { element: '#section9', popover: { title: 'static 5 Section', description: 'This is the static section.', align: 'start' }},
            
            { element: '#section10', popover: { title: 'static 5 Section', description: 'This is the static section.', align: 'start' }},
            
            { element: '#section11', popover: { title: 'static 5 Section', description: 'This is the static section.', align: 'start' }},
            
            { element: '#section12', popover: { title: 'static 5 Section', description: 'This is the static section.', align: 'start' }},
            
            { element: '#section13', popover: { title: 'static 5 Section', description: 'This is the static section.', align: 'start' }},
            
        ]
    });

    // document.getElementById('start-tour').addEventListener('click', () => {
        driverObj.drive();
    //});
});