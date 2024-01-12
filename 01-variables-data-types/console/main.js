// Log Number
console.log(28072000);

// Log string
console.log('Hello cả nhà');

// Log multiple values
console.log(20,'Hi', true);

// Log a variable
const x = 20;
console.log(x);

// Console error & warning
console.error('Alert')
console.warn('Warning')

// Log object as table
// confirm.table({Tên: 'Đức',Tuổi: '23'}) (Không chạy được


// Group console commands
console.group('simple');
console.log(x);
console.error('Alert');
console.warn('Warning');
console.groupEnd();

// Add CSS to logs
const styles = 'padding: 10px; background-color: yellow; color: green';
console.log('%cHello World', styles);
