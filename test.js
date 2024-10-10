list = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday'];
let concatenated = list[0];
for (let i = 1; i < list.length; i++) {
  concatenated += `,${list[i]}`;
}
