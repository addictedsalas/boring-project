import React, { useState, useRef } from 'react';
import SimpleReactValidator from 'simple-react-validator';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        shirtType: 'Select Shirt Type',
        printType: 'Select Print Type',
        quantity: '',
        printLocations: 'Select Number of Locations',
        location1Colors: 'Select Number of Colors',
        location1Position: 'Select Print Position',
        location2Colors: 'Select Number of Colors',
        location2Position: 'Select Print Position',
        location3Colors: 'Select Number of Colors',
        location3Position: 'Select Print Position',
        location4Colors: 'Select Number of Colors',
        location4Position: 'Select Print Position',
        dateNeeded: '',
        businessName: '',  
        email: '',
        phone: '',
        additionalInfo: ''
    });

    const [files, setFiles] = useState({
        location1: null,
        location2: null,
        location3: null,
        location4: null
    });

    const [previews, setPreviews] = useState({
        location1: '',
        location2: '',
        location3: '',
        location4: ''
    });

    const printPositions = {
        front: [
            { value: '', label: 'Select Front Position' },
            { value: 'front_left_chest', label: 'Front - Left Chest (3-4" wide)' },
            { value: 'front_right_chest', label: 'Front - Right Chest (3-4" wide)' },
            { value: 'front_center_chest', label: 'Front - Center Chest (6-8" wide)' },
            { value: 'front_full_width', label: 'Front - Full Width (12-14" wide)' }
        ],
        back: [
            { value: '', label: 'Select Back Position' },
            { value: 'back_top', label: 'Back - Upper Center (6-8" wide)' },
            { value: 'back_full', label: 'Back - Full Width (12-14" wide)' },
            { value: 'back_bottom', label: 'Back - Lower Center (6-8" wide)' }
        ],
        sleeves: [
            { value: '', label: 'Select Sleeve Position' },
            { value: 'left_sleeve', label: 'Left Sleeve (2-3" wide)' },
            { value: 'right_sleeve', label: 'Right Sleeve (2-3" wide)' }
        ]
    };

    const simpleValidator = useRef(new SimpleReactValidator());

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleFileChange = (e, location) => {
        const file = e.target.files[0];
        if (file) {
            // Check file type
            const validTypes = ['image/jpeg', 'image/png', 'image/gif', 'application/pdf', 'application/illustrator'];
            if (!validTypes.includes(file.type)) {
                alert('Please upload a valid file type (JPG, PNG, GIF, PDF, AI)');
                return;
            }

            // Check file size (5MB limit)
            if (file.size > 5 * 1024 * 1024) {
                alert('File size must be less than 5MB');
                return;
            }

            // Update files state
            setFiles(prev => ({
                ...prev,
                [location]: file
            }));

            // Create preview for images
            if (file.type.startsWith('image/')) {
                const reader = new FileReader();
                reader.onloadend = () => {
                    setPreviews(prev => ({
                        ...prev,
                        [location]: reader.result
                    }));
                };
                reader.readAsDataURL(file);
            } else {
                // Show icon for non-image files
                setPreviews(prev => ({
                    ...prev,
                    [location]: file.type === 'application/pdf' ? 'pdf' : 'ai'
                }));
            }
        }
    };

    const removeFile = (location) => {
        setFiles(prev => ({
            ...prev,
            [location]: null
        }));
        setPreviews(prev => ({
            ...prev,
            [location]: ''
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (simpleValidator.current.allValid()) {
            // Here you would typically send both formData and files to your server
            console.log({ formData, files });
        } else {
            simpleValidator.current.showMessages();
            setFormData({ ...formData });
        }
    };

    const renderLocationFields = () => {
        const numLocations = parseInt(formData.printLocations) || 1;
        const locations = [];

        for (let i = 1; i <= numLocations; i++) {
            locations.push(
                <div key={`location${i}`} className="print-location-section mb-4">
                    <h5 className="location-title">Location {i}</h5>
                    <div className="form-group mb-4">
                        <div className="form-clt">
                            <select
                                name={`location${i}Colors`}
                                value={formData[`location${i}Colors`]}
                                onChange={handleChange}
                                className="form-select"
                                title={`Select the number of colors for your print location ${i}`}
                            >
                                <option value="Select Number of Colors">Select Number of Colors</option>
                                <option value="1">Single Color Print</option>
                                <option value="2">Two Color Print</option>
                                <option value="full">Full Color Print</option>
                            </select>
                        </div>
                    </div>
                    <div className="form-group mb-4">
                        <div className="form-clt">
                            <select
                                name={`location${i}Position`}
                                value={formData[`location${i}Position`]}
                                onChange={handleChange}
                                className="form-select"
                                required
                                title={`Select the print position for your print location ${i}`}
                            >
                                <option value="Select Print Position">Select Print Position*</option>
                                <optgroup label="Front">
                                    {printPositions.front.map((position, index) => (
                                        <option key={`front-${index}`} value={position.value}>{position.label}</option>
                                    ))}
                                </optgroup>
                                <optgroup label="Back">
                                    {printPositions.back.map((position, index) => (
                                        <option key={`back-${index}`} value={position.value}>{position.label}</option>
                                    ))}
                                </optgroup>
                                <optgroup label="Sleeves">
                                    {printPositions.sleeves.map((position, index) => (
                                        <option key={`sleeve-${index}`} value={position.value}>{position.label}</option>
                                    ))}
                                </optgroup>
                            </select>
                        </div>
                        {simpleValidator.current.message(`location${i}Position`, formData[`location${i}Position`], 'required')}
                    </div>
                    <div className="file-upload-section">
                        <div className="upload-area">
                            <div className="form-group">
                                <div className="form-clt">
                                    <div className="icon" title="Upload your artwork">
                                        <i className="fal fa-cloud-upload"></i>
                                    </div>
                                    <input
                                        type="file"
                                        id={`file-location${i}`}
                                        onChange={(e) => handleFileChange(e, `location${i}`)}
                                        accept=".jpg,.jpeg,.png,.gif,.pdf,.ai"
                                        className="form-control"
                                        style={{ paddingLeft: '35px' }}
                                    />
                                </div>
                            </div>
                            {files[`location${i}`] && (
                                <div className="file-preview">
                                    {typeof previews[`location${i}`] === 'string' && previews[`location${i}`].startsWith('data:image') ? (
                                        <img src={previews[`location${i}`]} alt="Preview" />
                                    ) : (
                                        <i className={`fal fa-file-${previews[`location${i}`] === 'pdf' ? 'pdf' : 'image'}`}></i>
                                    )}
                                    <span>{files[`location${i}`].name}</span>
                                    <button type="button" onClick={() => removeFile(`location${i}`)} className="remove-file">
                                        <i className="fal fa-times"></i>
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            );
        }
        return locations;
    };

    return (
        <>
            <style jsx>{`
                .form-clt {
                    position: relative;
                }
                .form-clt .icon {
                    position: absolute;
                    left: 15px;
                    top: 50%;
                    transform: translateY(-50%);
                    z-index: 1;
                }
                .form-clt input,
                .form-clt select {
                    width: 100%;
                    border: 1px solid #eee;
                    padding: 14px 20px;
                    padding-left: 45px;
                    border-radius: 0;
                    color: var(--black);
                    font-size: 14px;
                    font-weight: 400;
                    background: transparent;
                    text-transform: capitalize;
                }
                input[type="date"] {
                    text-transform: uppercase !important;
                    letter-spacing: 0.5px;
                }
                input[type="date"]::-webkit-calendar-picker-indicator {
                    cursor: pointer;
                }
                input[type="date"]:not(:placeholder-shown) {
                    font-weight: 500;
                }
                .form-section {
                    background: #fff;
                    padding: 25px;
                    border-radius: 5px;
                    box-shadow: 0 0 15px rgba(0,0,0,0.03);
                    height: 100%;
                }
                .section-title {
                    color: var(--theme-primary-color);
                    font-size: 1.25rem;
                    font-weight: 600;
                }
                .form-group {
                    position: relative;
                }
                .form-group:last-child {
                    margin-bottom: 0;
                }
                .file-upload-section {
                    margin-top: 1rem;
                }
                .upload-area {
                    border: 2px dashed #ddd;
                    border-radius: 5px;
                    transition: all 0.3s;
                }
                .upload-area:hover {
                    border-color: var(--theme-primary-color);
                }
                .file-input {
                    display: none;
                }
                .upload-label {
                    padding: 2rem;
                    text-align: center;
                    cursor: pointer;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 0.5rem;
                    margin: 0;
                }
                .upload-label i {
                    font-size: 2rem;
                    color: #687188;
                    margin-bottom: 0.5rem;
                }
                .upload-label span {
                    font-size: 1rem;
                    color: #333;
                }
                .upload-label small {
                    color: #687188;
                }
                .file-types {
                    font-size: 0.75rem;
                    margin-top: 0.5rem;
                }
                .file-preview {
                    display: flex;
                    align-items: center;
                    gap: 1rem;
                    padding: 1rem;
                }
                .file-preview img {
                    width: 50px;
                    height: 50px;
                    object-fit: cover;
                    border-radius: 5px;
                }
                .file-preview i {
                    font-size: 2rem;
                    color: #687188;
                }
                .remove-file {
                    background: none;
                    border: none;
                    color: #dc3545;
                    cursor: pointer;
                    padding: 0.25rem;
                    margin-left: auto;
                }
                .remove-file:hover {
                    color: #bd2130;
                }
                @media (max-width: 991px) {
                    .form-section {
                        margin-bottom: 20px;
                    }
                }
                .print-location-section {
                    background: #f8f8f8;
                    padding: 1.5rem;
                    border-radius: 5px;
                    margin-bottom: 2rem;
                }
                .location-title {
                    font-size: 1.1rem;
                    color: #333;
                    margin-bottom: 1rem;
                    font-weight: 500;
                }
                .contact-section {
                    margin-top: 2rem;
                    padding-top: 2rem;
                    border-top: 1px solid #eee;
                }
                .additional-info-section {
                    background: #f8f8f8;
                    padding: 1.5rem;
                    border-radius: 5px;
                }
                .form-clt textarea {
                    width: 100%;
                    border: 1px solid #eee;
                    padding: 12px 20px 12px 45px;
                    border-radius: 0;
                    color: var(--black);
                    font-size: 14px;
                    font-weight: 400;
                    background: #fff;
                    line-height: 1.5;
                }
                .form-clt textarea:focus {
                    border-color: var(--theme-primary-color);
                    outline: none;
                }
                .form-clt textarea::placeholder {
                    color: #687188;
                }
            `}</style>
            <form id="contact-form" onSubmit={handleSubmit}>
                <div className="row g-4">
                    <div className="col-lg-6">
                        {/* Left Column - Product Details */}
                        <div className="form-section">
                            <h4 className="section-title mb-4">Product Details</h4>
                            <div className="form-group mb-4">
                                <div className="form-clt">
                                    <div className="icon" title="Select your shirt type">
                                        <i className="fal fa-tshirt"></i>
                                    </div>
                                    <select
                                        name="shirtType"
                                        value={formData.shirtType}
                                        onChange={handleChange}
                                        className="form-select"
                                    >
                                        <option value="Select Shirt Type">Select Shirt Type</option>
                                        <option value="cotton">100% Cotton T-Shirt</option>
                                        <option value="blend">Cotton/Poly Blend T-Shirt</option>
                                        <option value="performance">Performance/Moisture Wicking</option>
                                        <option value="hoodie">Hoodie</option>
                                        <option value="crewneck">Crewneck Sweatshirt</option>
                                    </select>
                                </div>
                            </div>

                            <div className="form-group mb-4">
                                <div className="form-clt">
                                    <div className="icon" title="Choose between printing or embroidery">
                                        <i className="fal fa-print"></i>
                                    </div>
                                    <select
                                        name="printType"
                                        value={formData.printType}
                                        onChange={handleChange}
                                        className="form-select"
                                        required
                                    >
                                        <option value="Select Print Type">Select Print Type*</option>
                                        <option value="printing">Screen Printing</option>
                                        <option value="embroidery">Embroidery</option>
                                    </select>
                                    {simpleValidator.current.message('printType', formData.printType, 'required')}
                                </div>
                            </div>

                            <div className="form-group mb-4">
                                <div className="form-clt">
                                    <div className="icon">
                                        <i className="fal fa-box"></i>
                                    </div>
                                    <input
                                        type="number"
                                        name="quantity"
                                        placeholder="Total Quantity Needed*"
                                        value={formData.quantity}
                                        onChange={handleChange}
                                        min="1"
                                    />
                                    {simpleValidator.current.message('quantity', formData.quantity, 'required|numeric')}
                                </div>
                            </div>

                            <div className="form-group mb-4">
                                <div className="form-clt">
                                    <div className="icon" title="Example: Front and Back counts as 2 locations">
                                        <i className="fal fa-map-marker-alt"></i>
                                    </div>
                                    <select
                                        name="printLocations"
                                        value={formData.printLocations}
                                        onChange={handleChange}
                                        className="form-select"
                                        required
                                    >
                                        <option value="Select Number of Locations">Select Number of Locations</option>
                                        <option value="1">1 Location</option>
                                        <option value="2">2 Locations</option>
                                        <option value="3">3 Locations</option>
                                        <option value="4">4 Locations</option>
                                    </select>
                                </div>
                            </div>

                            <div className="form-group mb-4">
                                <div className="form-clt">
                                    <div className="icon" title="When do you need your order by?">
                                        <i className="fal fa-calendar-alt"></i>
                                    </div>
                                    <input
                                        type="date"
                                        name="dateNeeded"
                                        className="form-control"
                                        placeholder="ORDER DEADLINE*"
                                        value={formData.dateNeeded}
                                        onChange={handleChange}
                                        min={new Date().toISOString().split('T')[0]}
                                        title="When do you need your order completed by?"
                                        style={{ textTransform: 'uppercase' }}
                                    />
                                    {simpleValidator.current.message('dateNeeded', formData.dateNeeded, 'required')}
                                </div>
                            </div>

                            <div className="contact-section">
                                <h5 className="section-title mb-4">Contact Information</h5>
                                
                                <div className="form-group mb-4">
                                    <div className="form-clt">
                                        <div className="icon" title="Your name or business name">
                                            <i className="fal fa-user-circle"></i>
                                        </div>
                                        <input
                                            type="text"
                                            name="businessName"
                                            placeholder="Name / Business Name*"
                                            value={formData.businessName}
                                            onChange={handleChange}
                                        />
                                        {simpleValidator.current.message('businessName', formData.businessName, 'required')}
                                    </div>
                                </div>

                                <div className="form-group mb-4">
                                    <div className="form-clt">
                                        <div className="icon" title="Your email address">
                                            <i className="fal fa-envelope"></i>
                                        </div>
                                        <input
                                            type="email"
                                            name="email"
                                            placeholder="Your Email*"
                                            value={formData.email}
                                            onChange={handleChange}
                                        />
                                        {simpleValidator.current.message('email', formData.email, 'required|email')}
                                    </div>
                                </div>

                                <div className="form-group mb-4">
                                    <div className="form-clt">
                                        <div className="icon" title="Your phone number">
                                            <i className="fal fa-phone"></i>
                                        </div>
                                        <input
                                            type="tel"
                                            name="phone"
                                            placeholder="Phone Number*"
                                            value={formData.phone}
                                            onChange={handleChange}
                                        />
                                        {simpleValidator.current.message('phone', formData.phone, 'required|phone')}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6">
                        {/* Right Column - Design & Contact */}
                        <div className="form-section">
                            <h4 className="section-title mb-4">Print Details</h4>
                            {renderLocationFields()}
                            <div className="additional-info-section mb-4">
                                <h5 className="location-title mb-3">Sizes & Additional Comments</h5>
                                <div className="form-group">
                                    <div className="form-clt">
                                        <div className="icon" title="Enter sizes needed and any additional information">
                                            <i className="fal fa-comment-alt-lines"></i>
                                        </div>
                                        <textarea
                                            name="additionalInfo"
                                            value={formData.additionalInfo}
                                            onChange={handleChange}
                                            className="form-control"
                                            placeholder="Enter sizes needed and any additional comments or special instructions..."
                                            style={{
                                                minHeight: '150px',
                                                resize: 'vertical',
                                                paddingTop: '12px'
                                            }}
                                        ></textarea>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-12">
                        <button type="submit" className="theme-btn">
                            Get Quote <i className="fas fa-long-arrow-right"></i>
                        </button>
                    </div>
                </div>
            </form>
        </>
    );
};

export default ContactForm;
