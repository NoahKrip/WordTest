import { Document, Packer, Paragraph } from 'node_modules\jsdocx\dist\jsdocx.js';

// Create a new document
const doc = new Document();

// Add a paragraph to the document
doc.addSection({
    children: [new Paragraph("Hello, this is a sample text for the Word document.")],
});

// Generate and download the document
Packer.toBlob(doc).then(blob => {
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    document.body.appendChild(a);
    a.href = url;
    a.download = "example.docx";
    a.click();
    document.body.removeChild(a);
}).catch(error => {
    console.error('Error generating the document:', error);
});
